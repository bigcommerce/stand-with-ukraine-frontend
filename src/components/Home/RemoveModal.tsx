import { useCallback, useMemo, useState } from 'react';

import { Modal as modal, ModalProps, Textarea } from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  hideRemoveDialog,
  remove,
  resetSteps,
  selectShowRemoveDialog,
} from '../../state/mainSlice';
import { alertsManager } from '../../state/store';

// fix modal type
const Modal: React.FC<ModalProps & { children?: any }> = modal;

export default function RemoveModal() {
  const isOpen = useAppSelector(selectShowRemoveDialog);
  const dispatch = useAppDispatch();
  const [reason, setReason] = useState('');

  const closeModal = useCallback(
    () => dispatch(hideRemoveDialog()),
    [dispatch]
  );

  const handleReasonChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setReason(event.target.value),
    [setReason]
  );

  const removeWidget = useCallback(async () => {
    await dispatch(remove(reason.trim()));
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
  }, [reason, dispatch]);

  const actions = useMemo(
    () =>
      [
        { text: 'Cancel', variant: 'subtle', onClick: closeModal },
        {
          text: 'Remove',
          actionType: 'destructive',
          onClick: removeWidget,
          disabled: reason.trim().length <= 3,
        },
      ] as any,
    [closeModal, removeWidget, reason]
  );

  return (
    <Modal
      actions={actions}
      header="Remove widget from your store"
      isOpen={isOpen}
      onClose={closeModal}
      closeOnEscKey={true}
      closeOnClickOutside={false}
    >
      <Textarea
        label="Please tell us why did you decide to remove the widget?"
        description="Required. Maximum 1000 characters"
        placeholder=""
        required={true}
        maxLength={1000}
        rows={3}
        resize={true}
        value={reason}
        onChange={handleReasonChange}
      />
    </Modal>
  );
}
