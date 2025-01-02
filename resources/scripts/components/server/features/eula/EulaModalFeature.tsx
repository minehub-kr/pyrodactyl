import { useEffect, useState } from 'react';

import FlashMessageRender from '@/components/FlashMessageRender';
import Modal from '@/components/elements/Modal';
import { Button } from '@/components/elements/button/index';
import { SocketEvent, SocketRequest } from '@/components/server/events';

import saveFileContents from '@/api/server/files/saveFileContents';

import { ServerContext } from '@/state/server';

import useFlash from '@/plugins/useFlash';

const EulaModalFeature = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const status = ServerContext.useStoreState((state) => state.status.value);
    const { clearFlashes, clearAndAddHttpError } = useFlash();
    const { connected, instance } = ServerContext.useStoreState((state) => state.socket);

    useEffect(() => {
        if (!connected || !instance || status === 'running') return;

        const listener = (line: string) => {
            if (line.toLowerCase().indexOf('you need to agree to the eula in order to run the server') >= 0) {
                setVisible(true);
            }
        };

        instance.addListener(SocketEvent.CONSOLE_OUTPUT, listener);

        return () => {
            instance.removeListener(SocketEvent.CONSOLE_OUTPUT, listener);
        };
    }, [connected, instance, status]);

    const onAcceptEULA = () => {
        setLoading(true);
        clearFlashes('feature:eula');

        saveFileContents(uuid, 'eula.txt', 'eula=true')
            .then(() => {
                if (status === 'offline' && instance) {
                    instance.send(SocketRequest.SET_STATE, 'restart');
                }

                setLoading(false);
                setVisible(false);
            })
            .catch((error) => {
                console.error(error);
                clearAndAddHttpError({ key: 'feature:eula', error });
            })
            .then(() => setLoading(false));
    };

    useEffect(() => {
        clearFlashes('feature:eula');
    }, []);

    return (
        <Modal
            visible={visible}
            onDismissed={() => setVisible(false)}
            closeOnBackground={false}
            showSpinnerOverlay={loading}
            title='Accept Minecraft EULA'
        >
            <div className='flex flex-col'>
                <FlashMessageRender key={'feature:eula'} />
                <p className={`text-zinc-200`}>
                    Minecraft 서버를 운영하려면 {' '}
                    <a
                        target={'_blank'}
                        className={`text-zinc-300 underline transition-colors duration-150 hover:text-zinc-400`}
                        rel={'noreferrer noopener'}
                        href='https://www.aka.ms/MinecraftEULA'
                    >
                        Minecraft EULA
                    </a>
                    에 동의해야 해요.
                </p>
                <div className={`my-6 gap-3 flex items-center justify-end`}>
                    <Button.Text onClick={() => setVisible(false)}>동의하지 않기</Button.Text>
                    <Button onClick={onAcceptEULA}>동의</Button>
                </div>
            </div>
        </Modal>
    );
};

export default EulaModalFeature;
