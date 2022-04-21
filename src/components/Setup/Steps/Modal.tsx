import {
  Box,
  Form,
  FormGroup,
  Input,
  Panel,
  Tabs,
  Textarea,
} from '@bigcommerce/big-design';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { RootState } from '../../../state/store';
import { configureButtons, setModalBody, setModalTitle } from '../setupSlice';
import BodySmall from './common/BodySmall';
import PreviewTab from './Preview';

function selectWidgetModal(state: RootState) {
  return {
    modalTitle: state.setup.widgetConfiguration.modalTitle,
    modalBody: state.setup.widgetConfiguration.modalBody,
  };
}

const tabs = [
  { id: 'info', title: 'Info' },
  { id: 'preview', title: 'Preview' },
];

function InfoTab() {
  const dispatch = useAppDispatch();
  const { modalTitle, modalBody } = useAppSelector(selectWidgetModal);

  return (
    <Form>
      <FormGroup>
        <Input
          label="Modal Title"
          placeholder="Modal Title"
          required={true}
          type="text"
          value={modalTitle}
          onChange={useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setModalTitle(event.target.value)),
            [dispatch]
          )}
        />
      </FormGroup>
      <FormGroup>
        <Textarea
          label="Modal Body"
          placeholder="Modal Body"
          required={true}
          rows={5}
          resize={true}
          value={modalBody}
          onChange={useCallback(
            (event: React.ChangeEvent<HTMLTextAreaElement>) =>
              dispatch(setModalBody(event.target.value)),
            [dispatch]
          )}
        />
      </FormGroup>
    </Form>
  );
}

export default function Modal() {
  const [tab, setTab] = useState<'info' | 'preview'>('info');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      configureButtons({
        cancelButton: { show: false, disabled: false },
        backButton: { show: true, disabled: false },
        continueButton: { show: false, disabled: false },
        publishButton: { show: true, disabled: false },
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Customize modal">
      <BodySmall>
        Click on the widget will open the modal with detailed information.
      </BodySmall>
      <Tabs activeTab={tab} items={tabs} onTabClick={setTab as any}></Tabs>
      <Box marginTop="large">
        {tab === 'info' ? <InfoTab /> : null}
        {tab === 'preview' ? <PreviewTab /> : null}
      </Box>
    </Panel>
  );
}
