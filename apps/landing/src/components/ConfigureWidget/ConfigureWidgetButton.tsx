import { Button } from '../Button';

import { ConfigureWidgetContext } from './ConfigureWidgetContext';

export default function ConfigureWidgetButton() {
  return (
    <ConfigureWidgetContext.Consumer>
      {({ setWidgetOpen }) => (
        <Button onClick={() => setWidgetOpen(true)} variant="light">
          Select
        </Button>
      )}
    </ConfigureWidgetContext.Consumer>
  );
}
