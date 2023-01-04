import { ButtonLink } from '../Button';

import { ConfigureWidgetContext } from './ConfigureWidgetContext';

export default function ConfigureWidgetButton() {
  return (
    <ConfigureWidgetContext.Consumer>
      {({ setWidgetOpen }) => (
        <ButtonLink onClick={() => setWidgetOpen(true)} variant="light">
          Select
        </ButtonLink>
      )}
    </ConfigureWidgetContext.Consumer>
  );
}
