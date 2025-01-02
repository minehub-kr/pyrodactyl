import { Actions, useStoreActions } from 'easy-peasy';
import { Form, Formik } from 'formik';
import { toast } from 'sonner';
import { object, string } from 'yup';

import Field from '@/components/elements/Field';
import TitledGreyBox from '@/components/elements/TitledGreyBox';
import { Button } from '@/components/elements/button/index';

import { httpErrorToHuman } from '@/api/http';
import renameServer from '@/api/server/renameServer';

import { ApplicationStore } from '@/state';
import { ServerContext } from '@/state/server';

interface Values {
    name: string;
    description: string;
}

const RenameServerBox = () => {
    return (
        <TitledGreyBox title={'서버 세부 정보'}>
            <Form className='flex flex-col gap-4'>
                <Field id={'name'} name={'name'} label={'서버 이름'} type={'text'} />
                <Field id={'description'} name={'description'} label={'서버 설명'} type={'text'} />
                <div className={`mt-6 text-right`}>
                    <Button type={'submit'}>저장</Button>
                </div>
            </Form>
        </TitledGreyBox>
    );
};

export default () => {
    const server = ServerContext.useStoreState((state) => state.server.data!);
    const setServer = ServerContext.useStoreActions((actions) => actions.server.setServer);
    const { addError, clearFlashes } = useStoreActions((actions: Actions<ApplicationStore>) => actions.flashes);

    const submit = ({ name, description }: Values) => {
        clearFlashes('settings');
        toast('서버 세부 정보를 업데이트하는 중...');
        renameServer(server.uuid, name, description)
            .then(() => setServer({ ...server, name, description }))
            .catch((error) => {
                console.error(error);
                addError({ key: 'settings', message: httpErrorToHuman(error) });
            })
            .then(() => toast.success('서버 세부 정보가 업데이트되었습니다!'));
    };

    return (
        <Formik
            onSubmit={submit}
            initialValues={{
                name: server.name,
                description: server.description,
            }}
            validationSchema={object().shape({
                name: string().required().min(1),
                description: string().nullable(),
            })}
        >
            <RenameServerBox />
        </Formik>
    );
};
