import { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import http from '../../api/http';
import Button from '../elements/Button';

const LoginContainer = () => {
    const location = useLocation();
    const [message, setMessage] = useState<string>();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const logout = params.get('logout');

    console.log(code, logout);

    const onLogin = useCallback(async () => {
        try {
            await http.post('/crongify/auth', { code });

            // @ts-ignore
            window.location = '/';
        } catch (err) {
            setMessage('스텔라 IT와 연결하는 도중, 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.');
        }
    }, []);

    const onRedirect = async () => {
        const { data } = await http.get('/crongify/auth');
        window.location.href = data.url;
    };

    useEffect(() => {
        if (logout !== null) {
            setMessage('로그아웃되었습니다.');
            return;
        }

        setMessage('스텔라 IT으로 로그인을 진행하고 있습니다. 잠시만 기다려주세요.');

        code ? onLogin() : onRedirect();
    }, [code, logout]);

    return (
        <div className='flex justify-center pt-8 items-center'>
            <div>{message}</div>
            {logout !== null && (
                <NavLink to='/auth/login'>
                    <Button className='left-3'>다시 로그인</Button>
                </NavLink>
            )}
        </div>
    );
};

export default LoginContainer;
