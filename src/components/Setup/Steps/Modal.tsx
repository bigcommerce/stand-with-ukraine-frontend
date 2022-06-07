import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Box,
  Form,
  FormGroup,
  Input,
  Link,
  Panel,
  Tabs,
  Textarea,
} from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  configureButtons,
  resetModalToDefault,
  selectWidgetModal,
  setModalBody,
  setModalTitle,
} from '../../../state/mainSlice';
import BodySmall from './common/BodySmall';
import PreviewTab from './Preview';

type TAB_TYPE = 'configure' | 'preview';
const tabs: { id: TAB_TYPE; title: string }[] = [
  { id: 'configure', title: 'Configure' },
  { id: 'preview', title: 'Preview' },
];

const Divider = styled.hr`
  background-color: #d9dce9;
  border: none;
  height: 1px;
  width: 100%;
  max-width: 800px;
  margin: 0px;
  top: -1px;
  position: relative;
  z-index: 0;
`;

const TabContainer = styled.div`
  & div[role='tablist'],
  & button {
    z-index: 1;
  }
`;
function InfoTab() {
  const dispatch = useAppDispatch();
  const { modalTitle, modalBody } = useAppSelector(selectWidgetModal);
  const resetText = useCallback(
    () => dispatch(resetModalToDefault()),
    [dispatch]
  );

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
      <FormGroup>
        <Link onClick={resetText}>Reset to default</Link>
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
      <TabContainer>
        <Tabs activeTab={tab} items={tabs} onTabClick={setTab as any} />
        <Divider />
      </TabContainer>
      <Box marginTop="large">
        {tab === 'configure' ? <InfoTab /> : null}
        {tab === 'preview' ? <PreviewTab /> : null}
      </Box>
    </Panel>
  );
}
