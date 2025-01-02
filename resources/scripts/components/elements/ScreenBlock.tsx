import { Link } from 'react-router-dom';

const ScreenBlock = ({ title, message }) => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>{title}</h1>
                    <p className=''>{message}</p>
                </div>
            </div>
        </>
    );
};

const ServerError = ({ title, message }) => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>{title}</h1>
                    <p className=''>{message}</p>
                </div>
            </div>
        </>
    );
};

const NotFound = () => {
    return (
        <>
            <div className='w-full h-full flex gap-12 items-center p-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-8 max-w-sm text-left'>
                    <h1 className='text-[32px] font-extrabold leading-[98%] tracking-[-0.11rem]'>페이지 찾을 수 없음</h1>
                    <p className=''>
                        찾고 있는 페이지를 찾을 수 없습니다. 액세스 권한이 손실되었거나 페이지가 삭제되었을 수 있습니다. 대신 몇 가지 유용한 링크를 소개합니다.
                    </p>
                    <div className='flex flex-col gap-2'>
                        <Link to={'/'} className='text-brand'>
                            내 서버
                        </Link>
                    </div>
                </div>
                <img
                    alt=''
                    className='w-64 rounded-2xl'
                    height='256'
                    src='https://media.tenor.com/scX-kVPwUn8AAAAC/this-is-fine.gif'
                    width='256'
                    loading='lazy'
                    decoding='async'
                />
            </div>
        </>
    );
};

export { ServerError, NotFound };
export default ScreenBlock;
