import { Actions, useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';

import TitledGreyBox from '@/components/elements/TitledGreyBox';
import { Button } from '@/components/elements/button/index';
import { Dialog } from '@/components/elements/dialog';

import { httpErrorToHuman } from '@/api/http';
import reinstallServer from '@/api/server/reinstallServer';

import { ApplicationStore } from '@/state';
import { ServerContext } from '@/state/server';

export default () => {
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const [modalVisible, setModalVisible] = useState(false);
    const { addFlash, clearFlashes } = useStoreActions((actions: Actions<ApplicationStore>) => actions.flashes);

    const reinstall = () => {
        clearFlashes('settings');
        reinstallServer(uuid)
            .then(() => {
                addFlash({
                    key: 'settings',
                    type: 'success',
                    message: '서버 재설치가 시작되었습니다.',
                });
            })
            .catch((error) => {
                console.error(error);

                addFlash({ key: 'settings', type: 'error', message: httpErrorToHuman(error) });
            })
            .then(() => setModalVisible(false));
    };

    useEffect(() => {
        clearFlashes();
    }, []);

    return (
        <TitledGreyBox title={'서버 재설치'}>
            <Dialog.Confirm
                open={modalVisible}
                title={'서버 재설치 확인'}
                confirm={'서버 재설치'}
                onClose={() => setModalVisible(false)}
                onConfirmed={reinstall}
            >
                서버가 중지되고 이 과정에서 일부 파일이 삭제되거나 수정될 수 있어요. 계속할까요?
            </Dialog.Confirm>
            <p className={`text-sm`}>
                서버를 재설치하면 서버가 중지되고 초기 설정 스크립트가 다시 실행됩니다.&nbsp;
                <strong className={`font-medium`}>
                    이 과정에서 일부 파일이 삭제되거나 수정될 수 있으니 반드시 서버의 데이터를 백업하세요.
                </strong>
            </p>
            <div className={`mt-6 text-right`}>
                <Button.Danger variant={Button.Variants.Secondary} onClick={() => setModalVisible(true)}>
                    서버 재설치
                </Button.Danger>
            </div>
        </TitledGreyBox>
    );
};
