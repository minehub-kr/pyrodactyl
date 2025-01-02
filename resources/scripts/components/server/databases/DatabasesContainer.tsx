import { For } from 'million/react';
import { useEffect, useState } from 'react';

import FlashMessageRender from '@/components/FlashMessageRender';
import Can from '@/components/elements/Can';
import { MainPageHeader } from '@/components/elements/MainPageHeader';
import ServerContentBlock from '@/components/elements/ServerContentBlock';
import { PageListContainer, PageListItem } from '@/components/elements/pages/PageList';
import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';
import DatabaseRow from '@/components/server/databases/DatabaseRow';

import { httpErrorToHuman } from '@/api/http';
import getServerDatabases from '@/api/server/databases/getServerDatabases';

import { ServerContext } from '@/state/server';

import { useDeepMemoize } from '@/plugins/useDeepMemoize';
import useFlash from '@/plugins/useFlash';

export default () => {
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const databaseLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.databases);

    const { addError, clearFlashes } = useFlash();
    const [loading, setLoading] = useState(true);

    const databases = useDeepMemoize(ServerContext.useStoreState((state) => state.databases.data));
    const setDatabases = ServerContext.useStoreActions((state) => state.databases.setDatabases);

    useEffect(() => {
        setLoading(!databases.length);
        clearFlashes('databases');

        getServerDatabases(uuid)
            .then((databases) => setDatabases(databases))
            .catch((error) => {
                console.error(error);
                addError({ key: 'databases', message: httpErrorToHuman(error) });
            })
            .then(() => setLoading(false));
    }, []);

    return (
        <ServerContentBlock title={'데이터베이스'}>
            <FlashMessageRender byKey={'databases'} />
            <MainPageHeader title={'데이터베이스'}>
                <Can action={'database.create'}>
                    <div className={`flex flex-col sm:flex-row items-center justify-end`}>
                        {databaseLimit > 0 && databases.length > 0 && (
                            <p className={`text-sm text-zinc-300 mb-4 sm:mr-6 sm:mb-0 text-right`}>
                                {databases.length}개의 데이터베이스 (최대 {databaseLimit}개)
                            </p>
                        )}
                        {databaseLimit > 0 && databaseLimit !== databases.length && <CreateDatabaseButton />}
                    </div>
                </Can>
            </MainPageHeader>

            {!databases.length && loading ? null : (
                <>
                    {databases.length > 0 ? (
                        <PageListContainer data-pyro-backups>
                            <For each={databases} memo>
                                {(database, index) => (
                                    <PageListItem key={index}>
                                        <DatabaseRow key={database.id} database={database} />
                                    </PageListItem>
                                )}
                            </For>
                        </PageListContainer>
                    ) : (
                        <p className={`text-center text-sm text-zinc-300`}>
                            {databaseLimit > 0
                                ? '내 서버에는 데이터베이스가 없어요.'
                                : '이 서버는 데이터베이스를 만들 수 없어요.'}
                        </p>
                    )}
                </>
            )}
        </ServerContentBlock>
    );
};
