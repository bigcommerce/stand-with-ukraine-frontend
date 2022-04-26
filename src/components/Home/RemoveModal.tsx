import { Modal } from '@bigcommerce/big-design';
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { RootState } from '../../state/store';
import { remove, hideRemoveDialog } from './homeSlice';

function selectModalOpenState(state: RootState) {
  return state.home.showRemoveDialog;
}

export default function RemoveModal() {
  const isOpen = useAppSelector(selectModalOpenState);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(
    () => dispatch(hideRemoveDialog()),
    [dispatch]
  );

  const removeWidget = useCallback(() => dispatch(remove()), [dispatch]);

  const actions = useMemo(
    () =>
      [
        { text: 'Cancel', variant: 'subtle', onClick: closeModal },
        { text: 'Remove', actionType: 'destructive', onClick: removeWidget },
      ] as any,
    [closeModal, removeWidget]
  );

  return (
    <Modal
      actions={actions}
      header="Remove widget from your store"
      isOpen={isOpen}
      onClose={closeModal}
      closeOnEscKey={true}
      closeOnClickOutside={false}
    />
  );
}
