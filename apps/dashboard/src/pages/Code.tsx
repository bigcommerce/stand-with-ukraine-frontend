import { Button, Link, Panel } from '@bigcommerce/big-design';
import type { WidgetConfiguration } from 'config/types';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import styled from 'styled-components';
import { useClipboard } from 'use-clipboard-copy';

import ActionContainer from '../components/Home/ActionContainer';
import { CodeContent } from '../components/Home/Content';
import FAQ from '../components/Home/FAQ';
import { CodeHeader } from '../components/Home/Header';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { resetSteps } from '../state/mainSlice';
import { selectConfiguration } from '../state/mainSlice/selectors';
import { alertsManager } from '../state/store';
import { GetBaseURL } from '../state/utils';

SyntaxHighlighter.registerLanguage('html', markup);

// use a mask to remove fields from code for universal install
const HIDDEN_CONFIG_FIELDS = {
  store_hash: undefined,
};
const WIDGET_BASE_URL = GetBaseURL().replace('dashboard', 'widget')

export function GenerateCodeString(config: WidgetConfiguration) {
  const configJSONString = JSON.stringify(Object.assign({}, config, HIDDEN_CONFIG_FIELDS), null, 2);

  return `<script>
window.SWU_CONFIG = ${configJSONString};
</script>
<script defer src="${WIDGET_BASE_URL}index.js"></script>`;
}

const CodeWrapper = styled.div`
  cursor: copy;
`;

export default function Code() {
  const clipboard = useClipboard();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const config = useAppSelector(selectConfiguration);

  const codeString = GenerateCodeString(config);
  const handleCopyClick = useCallback(() => {
    clipboard.copy(codeString);
    alertsManager.add({
      autoDismiss: true,
      messages: [
        {
          text: 'Code was copied to your clipboard',
        },
      ],
      type: 'success',
    });
  }, [codeString, clipboard]);
  const handleResetClick = useCallback(async () => {
    dispatch(resetSteps());
    navigate('/setup');
  }, [dispatch, navigate]);

  return (
    <>
      <Panel>
        <CodeHeader />
        <CodeContent />
        <CodeWrapper onClick={handleCopyClick}>
          <SyntaxHighlighter language="html" style={style}>
            {codeString}
          </SyntaxHighlighter>
        </CodeWrapper>
        <FAQ listType="universal" />
        <ActionContainer>
          <Button onClick={handleCopyClick}>Copy Code</Button>
          <Link onClick={handleResetClick}>Reconfigure Widget</Link>
        </ActionContainer>
      </Panel>
    </>
  );
}
