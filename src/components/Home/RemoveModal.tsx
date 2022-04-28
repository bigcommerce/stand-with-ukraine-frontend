import { useCallback, useMemo } from 'react';

import { Modal } from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  hideRemoveDialog,
  remove,
  resetSteps,
  selectShowRemoveDialog,
} from '../../state/mainSlice';
import { alertsManager } from '../../state/store';

export default function RemoveModal() {
  const isOpen = useAppSelector(selectShowRemoveDialog);
  const dispatch = useAppDispatch();

  const closeModal = useCallback(
    () => dispatch(hideRemoveDialog()),
    [dispatch]
  );

  const removeWidget = useCallback(async () => {
    await dispatch(remove());
    dispatch(resetSteps());
    alertsManager.add({
      autoDismiss: true,
      messages: [
        {
          text: 'Widget was removed from your store',
        },
      ],
      type: 'success',
    });
  }, [dispatch]);

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
