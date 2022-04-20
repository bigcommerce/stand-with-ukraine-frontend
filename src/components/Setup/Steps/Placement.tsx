import { Panel, Radio } from '@bigcommerce/big-design';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  configureBackButton,
  configureContinueButton,
  setWidgetPlacement,
  WidgetPlacement,
} from '../setupSlice';
import { ReactComponent as TopLeft } from '../../../assets/WidgetPlacement/TopLeft.svg';
import { ReactComponent as TopMiddle } from '../../../assets/WidgetPlacement/TopMiddle.svg';
import { ReactComponent as TopRight } from '../../../assets/WidgetPlacement/TopRight.svg';
import { ReactComponent as BottomLeft } from '../../../assets/WidgetPlacement/BottomLeft.svg';
import { ReactComponent as BottomRight } from '../../../assets/WidgetPlacement/BottomRight.svg';
import { ReactComponent as BottomMiddle } from '../../../assets/WidgetPlacement/BottomMiddle.svg';
import BodySmall from './common/BodySmall';
import { RootState } from '../../../app/store';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;

  max-width: 320px;
  height: 220px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  margin: 1em 0;

  cursor: pointer;

  &:hover {
    border-color: #b4bad1;
  }

  & > svg {
    margin-top: 1rem;
  }
`;

function SelectWidgetPlacement({
  label,
  widgetPlacement,
  selected,
  image,
}: {
  label: string;
  widgetPlacement: WidgetPlacement;
  selected: WidgetPlacement;
  image: any;
}) {
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    (_: React.ChangeEvent<HTMLElement>) =>
      dispatch(setWidgetPlacement(widgetPlacement)),
    [dispatch, widgetPlacement]
  );

  return (
    <SelectWrapper onClick={handleChange as any}>
      <Radio
        label={label}
        checked={selected === widgetPlacement}
        onChange={handleChange}
      />
      {image}
    </SelectWrapper>
  );
}

function selectWidgetPlacement(state: RootState): WidgetPlacement {
  return state.setup.widgetConfiguration.placement;
}

const PLACEMENT_OPTIONS: {
  label: string;
  placement: WidgetPlacement;
  image: React.FunctionComponent<any>;
}[] = [
  {
    label: 'Top Left',
    placement: 'top-left',
    image: TopLeft,
  },
  {
    label: 'Top Middle',
    placement: 'top-middle',
    image: TopMiddle,
  },
  {
    label: 'Top Right',
    placement: 'top-right',
    image: TopRight,
  },
];

export default function Placement() {
  const widgetPlacement = useAppSelector(selectWidgetPlacement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(configureBackButton({ show: true, disabled: false }));
    dispatch(configureContinueButton({ show: true, disabled: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Select widget layout">
      <BodySmall>
        Where should your widget appear on a page? Mobile will follow the
        desktop approach.
      </BodySmall>
      {PLACEMENT_OPTIONS.map(
        ({ label, placement, image: ImageComponent }, idx) => (
          <SelectWidgetPlacement
            key={idx}
            label={label}
            widgetPlacement={placement}
            image={<ImageComponent />}
            selected={widgetPlacement}
          />
        )
      )}
    </Panel>
  );
}
