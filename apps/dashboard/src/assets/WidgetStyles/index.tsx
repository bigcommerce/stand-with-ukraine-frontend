import BlackWidgetStyle from './BlackStyle.webp';
import BlueWidgetStyle from './BlueStyle.webp';
import WhiteWidgetStyle from './WhiteStyle.webp';

export function BlueWidget() {
  return <img alt="Blue colored widget" src={BlueWidgetStyle} />;
}

export function BlackWidget() {
  return <img alt="Black colored widget" src={BlackWidgetStyle} />;
}

export function WhiteWidget() {
  return <img alt="White colored widget" src={WhiteWidgetStyle} />;
}
