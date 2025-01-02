import debounce from 'debounce';
import { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';

import Can from '@/components/elements/Can';
import Code from '@/components/elements/Code';
import CopyOnClick from '@/components/elements/CopyOnClick';
import { Textarea } from '@/components/elements/Input';
import InputSpinner from '@/components/elements/InputSpinner';
import { Button } from '@/components/elements/button/index';
import { PageListItem } from '@/components/elements/pages/PageList';
import DeleteAllocationButton from '@/components/server/network/DeleteAllocationButton';

import { ip } from '@/lib/formatters';

import { Allocation } from '@/api/server/getServer';
import setPrimaryServerAllocation from '@/api/server/network/setPrimaryServerAllocation';
import setServerAllocationNotes from '@/api/server/network/setServerAllocationNotes';
import getServerAllocations from '@/api/swr/getServerAllocations';

import { ServerContext } from '@/state/server';

import { useFlashKey } from '@/plugins/useFlash';

interface Props {
    allocation: Allocation;
}

const AllocationRow = ({ allocation }: Props) => {
    const [loading, setLoading] = useState(false);
    const { clearFlashes, clearAndAddHttpError } = useFlashKey('server:network');
    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const { mutate } = getServerAllocations();

    const onNotesChanged = useCallback((id: number, notes: string) => {
        mutate((data) => data?.map((a) => (a.id === id ? { ...a, notes } : a)), false);
    }, []);

    const setAllocationNotes = debounce((notes: string) => {
        setLoading(true);
        clearFlashes();

        setServerAllocationNotes(uuid, allocation.id, notes)
            .then(() => onNotesChanged(allocation.id, notes))
            .catch((error) => clearAndAddHttpError(error))
            .then(() => setLoading(false));
    }, 750);

    const setPrimaryAllocation = () => {
        clearFlashes();
        mutate((data) => data?.map((a) => ({ ...a, isDefault: a.id === allocation.id })), false);

        setPrimaryServerAllocation(uuid, allocation.id).catch((error) => {
            clearAndAddHttpError(error);
            mutate();
        });
    };

    return (
        <PageListItem>
            <div className={'flex items-center w-full md:w-auto'}>
                <div className={'mr-4 flex-1 md:w-40'}>
                    {allocation.alias ? (
                        <CopyOnClick text={allocation.alias}>
                            <div>
                                <Code dark className={'w-40 truncate'}>
                                    {allocation.alias}
                                </Code>
                            </div>
                        </CopyOnClick>
                    ) : (
                        <CopyOnClick text={ip(allocation.ip)}>
                            <div>
                                <Code dark>{ip(allocation.ip)}</Code>
                            </div>
                        </CopyOnClick>
                    )}
                    <label className='uppercase text-xs mt-1 text-zinc-400 block px-1 select-none transition-colors duration-150'>
                        {allocation.alias ? '호스트이름' : 'IP 주소'}
                    </label>
                </div>
                <div className={'w-16 md:w-24 overflow-hidden'}>
                    <Code dark>{allocation.port}</Code>
                    <label className='uppercase text-xs mt-1 text-zinc-400 block px-1 select-none transition-colors duration-150'>
                        포트
                    </label>
                </div>
            </div>
            <div className={'mt-4 w-full md:mt-0 md:flex-1 md:w-auto'}>
                <InputSpinner visible={loading}>
                    <Textarea
                        className={'bg-transparent p-4 rounded-xl w-full'}
                        placeholder={'Notes'}
                        defaultValue={allocation.notes || undefined}
                        onChange={(e) => setAllocationNotes(e.currentTarget.value)}
                    />
                </InputSpinner>
            </div>
            <div className={'flex justify-end space-x-4 mt-4 w-full md:mt-0 md:w-48'}>
                {allocation.isDefault ? (
                    <p>주요 포트</p>
                ) : (
                    <>
                        <Can action={'allocation.delete'}>
                            <DeleteAllocationButton allocation={allocation.id} />
                        </Can>
                        <Can action={'allocation.update'}>
                            <Button.Text size={Button.Sizes.Small} onClick={setPrimaryAllocation}>
                                주요 포트로 설정
                            </Button.Text>
                        </Can>
                    </>
                )}
            </div>
        </PageListItem>
    );
};

export default memo(AllocationRow, isEqual);
