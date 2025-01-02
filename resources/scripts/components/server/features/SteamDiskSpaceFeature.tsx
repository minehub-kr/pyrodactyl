import { useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';

import FlashMessageRender from '@/components/FlashMessageRender';
import Modal from '@/components/elements/Modal';
import { SocketEvent } from '@/components/server/events';

import { ServerContext } from '@/state/server';

import useFlash from '@/plugins/useFlash';

const SteamDiskSpaceFeature = () => {
    const [visible, setVisible] = useState(false);
    const [loading] = useState(false);

    const status = ServerContext.useStoreState((state) => state.status.value);
    const { clearFlashes } = useFlash();
    const { connected, instance } = ServerContext.useStoreState((state) => state.socket);
    const isAdmin = useStoreState((state) => state.user.data!.rootAdmin);

    useEffect(() => {
        if (!connected || !instance || status === 'running') return;

        const errors = ['steamcmd needs 250mb of free disk space to update', '0x202 after update job'];

        const listener = (line: string) => {
            if (errors.some((p) => line.toLowerCase().includes(p))) {
                setVisible(true);
            }
        };

        instance.addListener(SocketEvent.CONSOLE_OUTPUT, listener);

        return () => {
            instance.removeListener(SocketEvent.CONSOLE_OUTPUT, listener);
        };
    }, [connected, instance, status]);

    useEffect(() => {
        clearFlashes('feature:steamDiskSpace');
    }, []);

    return (
        <Modal
            visible={visible}
            onDismissed={() => setVisible(false)}
            showSpinnerOverlay={loading}
            dismissable={false}
            closeOnBackground={false}
            closeButton={true}
            title='사용 가능한 디스크 공간 부족'
        >
            <FlashMessageRender key={'feature:steamDiskSpace'} />
            <div className={`flex-col`}>
                {isAdmin ? (
                    <>
                        <p>
                            이 서버는 사용 가능한 디스크 공간이 부족하여 설치 또는 업데이트 프로세스를 완료할 수 없습니다.
                        </p>
                        <p className='mt-3'>
                            서버를 호스팅하는 기기에서 <code className={`font-mono bg-zinc-900 rounded py-1 px-2`}>df -h</code> 명령어를 입력하여 디스크 공간을 확인하세요. 파일을 삭제하거나 사용 가능한 디스크 공간을 늘려 문제를 해결하세요.
                        </p>
                    </>
                ) : (
                    <>
                        <p className={`mt-4`}>
                            이 서버는 사용 가능한 디스크 공간이 부족하여 설치 또는 업데이트 프로세스를 완료할 수 없습니다. 관리자에게 문의하여 디스크 공간 문제를 알려주세요.
                        </p>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default SteamDiskSpaceFeature;
