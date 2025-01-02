import { Form, Formik, Field as FormikField, FormikHelpers, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { boolean, object, string } from 'yup';

import FlashMessageRender from '@/components/FlashMessageRender';
import Can from '@/components/elements/Can';
import Field from '@/components/elements/Field';
import FormikFieldWrapper from '@/components/elements/FormikFieldWrapper';
import FormikSwitchV2 from '@/components/elements/FormikSwitchV2';
import { Textarea } from '@/components/elements/Input';
import Modal, { RequiredModalProps } from '@/components/elements/Modal';
import { Button } from '@/components/elements/button/index';

import createServerBackup from '@/api/server/backups/createServerBackup';
import getServerBackups from '@/api/swr/getServerBackups';

import { ServerContext } from '@/state/server';

import useFlash from '@/plugins/useFlash';

interface Values {
    name: string;
    ignored: string;
    isLocked: boolean;
    children?: React.ReactNode;
}

const ModalContent = ({ ...props }: RequiredModalProps) => {
    const { isSubmitting } = useFormikContext<Values>();

    return (
        <Modal {...props} showSpinnerOverlay={isSubmitting} title='서버 백업 생성'>
            <Form>
                <FlashMessageRender byKey={'backups:create'} />
                <Field
                    name={'name'}
                    label={'백업 이름'}
                    description={'제공된 경우, 이 백업을 참조하는 데 사용될 이름입니다.'}
                />
                <div className={`mt-6 flex flex-col`}>
                    <FormikFieldWrapper
                        className='flex flex-col gap-2'
                        name={'ignored'}
                        label={'무시된 파일 및 디렉토리'}
                        description={`
                            이 백업을 생성하는 동안 무시할 파일 또는 폴더를 입력하세요. 비워두면 서버 디렉토리의 루트에 있는
                            .pteroignore 파일의 내용을 사용합니다. 파일 및 폴더의 와일드카드 매칭이 지원되며, 경로 앞에 느낌표를
                            붙여 규칙을 부정할 수 있습니다.
                        `}
                    >
                        <FormikField
                            as={Textarea}
                            className='px-4 py-2 rounded-lg outline-none bg-[#ffffff17] text-sm'
                            name={'ignored'}
                            rows={6}
                        />
                    </FormikFieldWrapper>
                </div>
                <Can action={'backup.delete'}>
                    <div className={`my-6`}>
                        <FormikSwitchV2
                            name={'isLocked'}
                            label={'잠금'}
                            description={'명시적으로 잠금 해제될 때까지 이 백업이 삭제되지 않도록 합니다.'}
                        />
                    </div>
                </Can>
                <div className={`flex justify-end mb-6`}>
                    <Button role={'switch'} type={'submit'} disabled={isSubmitting}>
                        백업 시작
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default () => {
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const { clearFlashes, clearAndAddHttpError } = useFlash();
    const [visible, setVisible] = useState(false);
    const { mutate } = getServerBackups();

    useEffect(() => {
        clearFlashes('backups:create');
    }, [visible]);

    const submit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        clearFlashes('backups:create');
        createServerBackup(uuid, values)
            .then(async (backup) => {
                await mutate(
                    (data) => ({ ...data!, items: data!.items.concat(backup), backupCount: data!.backupCount + 1 }),
                    false,
                );
                setVisible(false);
            })
            .catch((error) => {
                clearAndAddHttpError({ key: 'backups:create', error });
                setSubmitting(false);
            });
    };

    return (
        <>
            {visible && (
                <Formik
                    onSubmit={submit}
                    initialValues={{ name: '', ignored: '', isLocked: false }}
                    validationSchema={object().shape({
                        name: string().max(191),
                        ignored: string(),
                        isLocked: boolean(),
                    })}
                >
                    <ModalContent appear visible={visible} onDismissed={() => setVisible(false)} />
                </Formik>
            )}
            <button
                style={{
                    background:
                        'radial-gradient(124.75% 124.75% at 50.01% -10.55%, rgb(36, 36, 36) 0%, rgb(20, 20, 20) 100%)',
                }}
                className='px-8 py-3 border-[1px] border-[#ffffff12] rounded-full text-sm font-bold shadow-md'
                onClick={() => setVisible(true)}
            >
                새 백업 만들기
            </button>
        </>
    );
};
