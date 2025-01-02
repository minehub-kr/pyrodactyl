import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';

import FlashMessageRender from '@/components/FlashMessageRender';
import Field from '@/components/elements/Field';
import Modal from '@/components/elements/Modal';
import { Button } from '@/components/elements/button/index';

import { httpErrorToHuman } from '@/api/http';
import createServerDatabase from '@/api/server/databases/createServerDatabase';

import { ServerContext } from '@/state/server';

import useFlash from '@/plugins/useFlash';

interface Values {
    databaseName: string;
    connectionsFrom: string;
}

const schema = object().shape({
    databaseName: string()
        .required('데이터베이스 이름을 입력해야 합니다.')
        .min(3, '데이터베이스 이름은 최소 3자 이상이어야 합니다.')
        .max(48, '데이터베이스 이름은 최대 48자 이하여야 합니다.')
        .matches(
            /^[\w\-.]{3,48}$/,
            '데이터베이스 이름은 영숫자, 밑줄, 대시 및/또는 마침표만 포함해야 합니다.',
        ),
    connectionsFrom: string().matches(/^[\w\-/.%:]+$/, '유효한 호스트 주소를 입력해야 합니다.'),
});

export default () => {
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const { addError, clearFlashes } = useFlash();
    const [visible, setVisible] = useState(false);

    const appendDatabase = ServerContext.useStoreActions((actions) => actions.databases.appendDatabase);

    const submit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        clearFlashes('database:create');
        createServerDatabase(uuid, {
            databaseName: values.databaseName,
            connectionsFrom: values.connectionsFrom || '%',
        })
            .then((database) => {
                appendDatabase(database);
                setVisible(false);
            })
            .catch((error) => {
                addError({ key: 'database:create', message: httpErrorToHuman(error) });
                setSubmitting(false);
            });
    };

    return (
        <>
            <Formik
                onSubmit={submit}
                initialValues={{ databaseName: '', connectionsFrom: '' }}
                validationSchema={schema}
            >
                {({ isSubmitting, resetForm }) => (
                    <Modal
                        visible={visible}
                        dismissable={!isSubmitting}
                        showSpinnerOverlay={isSubmitting}
                        onDismissed={() => {
                            resetForm();
                            setVisible(false);
                        }}
                        title='새 데이터베이스 생성'
                    >
                        <div className='flex flex-col'>
                            <FlashMessageRender byKey={'database:create'} />
                            <Form>
                                <Field
                                    type={'string'}
                                    id={'database_name'}
                                    name={'databaseName'}
                                    label={'데이터베이스 이름'}
                                    description={'데이터베이스 인스턴스에 대한 설명 이름입니다.'}
                                />
                                <div className={`mt-6`}>
                                    <Field
                                        type={'string'}
                                        id={'connections_from'}
                                        name={'connectionsFrom'}
                                        label={'연결 허용 범위'}
                                        description={
                                            '어디에서 연결을 허용할지 입력하세요. 비워두면 모든 곳에서 연결을 허용합니다.'
                                        }
                                    />
                                </div>
                                <div className={`flex gap-3 justify-end my-6`}>
                                    <Button type={'submit'}>데이터베이스 생성</Button>
                                </div>
                            </Form>
                        </div>
                    </Modal>
                )}
            </Formik>
            <button
                style={{
                    background:
                        'radial-gradient(124.75% 124.75% at 50.01% -10.55%, rgb(36, 36, 36) 0%, rgb(20, 20, 20) 100%)',
                }}
                className='px-8 py-3 border-[1px] border-[#ffffff12] rounded-full text-sm font-bold shadow-md'
                onClick={() => setVisible(true)}
            >
                새 데이터베이스
            </button>
        </>
    );
};
