import { Modal as modal, ModalProps, Textarea } from '@bigcommerce/big-design';
import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { hideRemoveDialog, resetSteps } from '../../state/mainSlice';
import { remove } from '../../state/mainSlice/asyncActions';
import { selectShowRemoveDialog } from '../../state/mainSlice/selectors';
import { alertsManager } from '../../state/store';

const Modal: React.FC<ModalProps & PropsWithChildren> = modal;
const ModalContentWrapper = styled.div`
  padding-bottom: 0.25rem;
`;

export default function RemoveModal() {
  const isOpen = useAppSelector(selectShowRemoveDialog);
  const dispatch = useAppDispatch();
  const [reason, setReason] = useState('');

  const closeModal = useCallback(() => dispatch(hideRemoveDialog()), [dispatch]);

  const handleReasonChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => setReason(event.target.value),
    [setReason],
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

  const actions: ModalProps['actions'] = useMemo(
    () => [
      { text: 'Cancel', variant: 'subtle', onClick: closeModal },
      {
        text: 'Remove',
        actionType: 'destructive',
        onClick: removeWidget,
        disabled: reason.trim().length <= 3,
      },
    ],
    [closeModal, removeWidget, reason],
  );

  return (
    <Modal
      actions={actions}
      closeOnClickOutside={false}
      closeOnEscKey={true}
      header="Remove widget from your store"
      isOpen={isOpen}
      onClose={closeModal}
    >
      <ModalContentWrapper>
        <Textarea
          description="Required. Maximum 1000 characters"
          label="Please tell us why did you decide to remove the widget?"
          maxLength={1000}
          onChange={handleReasonChange}
          placeholder=""
          required={true}
          resize={true}
          rows={3}
          value={reason}
        />
      </ModalContentWrapper>
    </Modal>
  );
}
