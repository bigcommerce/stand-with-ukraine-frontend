import styled from 'styled-components';

import { ReactComponent as CloseSVG } from '../../../assets/Close.svg';
import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';
import HeroImagePNG from '../../../assets/Preview/background.png';
import { useAppSelector } from '../../../state/hooks';
import { RootState } from '../../../state/store';
import { CHARITIES } from './common/data';
import PreviewItem from './PreviewItem';

const ModalPreviewBox = styled.div`
  max-width: 756px;

  background: #ffffff;
  border: 1px solid #f0f3ff;
  box-sizing: border-box;
  box-shadow: 0px 10px 12px rgba(31, 38, 41, 0.16);
  border-radius: 8px;

  margin: 2rem 0 0 0;
  padding: 2rem;
  position: relative;
`;

const CloseSVGContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.h1`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;
  margin: 0 0 0 1rem;
`;

const BodyText = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #313440;
  margin: 1rem 0 1rem 0;
`;

const HeroImage = styled.img`
  width: 696px;
`;

function selectWidgetConfiguration(state: RootState) {
  return state.setup.widgetConfiguration;
}

export default function PreviewTab() {
  const configuration = useAppSelector(selectWidgetConfiguration);
  const charity_list = configuration.charity_selections.map((item) =>
    CHARITIES.find((charity) => charity.identifier === item)
  );

  return (
    <ModalPreviewBox>
      <HeaderBlock>
        <LogoSVG />
        <HeaderText>{configuration.modal_title}</HeaderText>
      </HeaderBlock>
      <BodyText>{configuration.modal_body}</BodyText>
      <CloseSVGContainer>
        <CloseSVG />
      </CloseSVGContainer>
      <HeroImage
        src={HeroImagePNG}
        alt="Protestors standing against war in Ukraine"
      />
      {charity_list.map((item, key) =>
        item ? <PreviewItem key={key} {...item} /> : null
      )}
    </ModalPreviewBox>
  );
}
