import BlackWidgetStyle from './BlackStyle.png';
import BlueWidgetStyle from './BlueStyle.png';
import WhiteWidgetStyle from './WhiteStyle.png';

export function BlueWidget() {
  return <img src={BlueWidgetStyle} alt="Blue colored widget" />;
}

export function BlackWidget() {
  return <img src={BlackWidgetStyle} alt="Black colored widget" />;
}

export function WhiteWidget() {
  return <img src={WhiteWidgetStyle} alt="White colored widget" />;
}
