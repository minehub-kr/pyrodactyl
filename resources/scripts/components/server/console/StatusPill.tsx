import clsx from 'clsx';

import { ServerContext } from '@/state/server';

export const StatusPill = () => {
    const status = ServerContext.useStoreState((state) => state.status.value);

    return (
        <div
            className={clsx(
                'relative transition rounded-full pl-3 pr-3 py-2 flex items-center gap-1',
                status === 'offline' ? 'bg-red-400/25' : status === 'running' ? 'bg-green-400/25' : 'bg-yellow-400/25',
            )}
        >
            <div
                className={clsx(
                    'transition rounded-full h-4 w-4',
                    status === 'offline' ? 'bg-red-500' : status === 'running' ? 'bg-green-500' : 'bg-yellow-500',
                )}
            ></div>
            <div
                className={clsx(
                    'transition rounded-full h-4 w-4 animate-ping absolute top-2.5 opacity-45',
                    status === 'offline' ? 'bg-red-500' : status === 'running' ? 'bg-green-500' : 'bg-yellow-500',
                )}
            ></div>
            <div className='text-sm font-bold'>
                {status === 'offline'
                    ? '오프라인'
                    : status === 'running'
                        ? '온라인'
                        : status === 'stopping'
                            ? '정지하는 중'
                            : status === 'starting'
                                ? '시작하는 중'
                                : '정보를 불러오는 중'}
            </div>
        </div>
    );
};
