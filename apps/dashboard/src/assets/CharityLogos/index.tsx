import styled from "styled-components";

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

export const UnicefLogoProps = {
  src: "/assets/images/unicef.png",
  alt: "Unicef Logo",
};
export function UnicefLogo() {
  return <Image {...UnicefLogoProps} />;
}

export const RazomLogoProps = {
  src: "/assets/images/razom.png",
  alt: "Razom Logo",
};
export function RazomLogo() {
  return <Image {...RazomLogoProps} />;
}

export const MiraActionLogoProps = {
  src: "/assets/images/mira-action.png",
  alt: "Mira Action Logo",
};
export function MiraActionLogo() {
  return <Image {...MiraActionLogoProps} />;
}

export const NewUkraineLogoProps = {
  src: "/assets/images/new-ukraine.png",
  alt: "New Ukraine Logo",
};
export function NewUkraineLogo() {
  return <Image {...NewUkraineLogoProps} />;
}
