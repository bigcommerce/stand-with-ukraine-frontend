import styled from 'styled-components';
import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Form,
  FormGroup,
  Input,
  Panel,
  Tabs,
  Textarea,
} from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  configureButtons,
  setModalBody,
  setModalTitle,
} from '../../../state/mainSlice';
import { RootState } from '../../../state/store';
import BodySmall from './common/BodySmall';
import PreviewTab from './Preview';

function selectWidgetModal(state: RootState) {
  return {
    modalTitle: state.widgetConfiguration.modal_title,
    modalBody: state.widgetConfiguration.modal_body,
  };
}

type TAB_TYPE = 'configure' | 'preview';
const tabs: { id: TAB_TYPE; title: string }[] = [
  { id: 'configure', title: 'Configure' },
  { id: 'preview', title: 'Preview' },
];

const Divider = styled.hr`
  color: #D9DCE9;
  height: 1px;
  width: 100%;
  max-width: 800px;
  margin: 0px;
`;

function InfoTab() {
  const dispatch = useAppDispatch();
  const { modalTitle, modalBody } = useAppSelector(selectWidgetModal);

  return (
    <Form>
      <FormGroup>
        <Input
          label="Pop-up Title"
          description="Maximum 50 characters"
          placeholder="Pop Up Title"
          required={true}
          type="text"
          maxLength={50}
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
          label="Pop-up Body"
          description="Maximum 400 characters"
          placeholder="Pop Up Body"
          required={true}
          maxLength={400}
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
  const [tab, setTab] = useState<TAB_TYPE>('configure');
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
    <Panel header="Customize pop-up">
      <BodySmall>
        When shoppers click or tap the widget they will be shown a pop-up with
        more info. You can customize the message or use the default text.
      </BodySmall>
      <Tabs activeTab={tab} items={tabs} onTabClick={setTab as any} />
      <Divider/>
      <Box marginTop="large">
        {tab === 'configure' ? <InfoTab /> : null}
        {tab === 'preview' ? <PreviewTab /> : null}
      </Box>
    </Panel>
  );
}
