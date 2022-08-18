import React from 'react';

import BlackWidgetStyle from './BlackStyle.png';
import BlueWidgetStyle from './BlueStyle.png';
import WhiteWidgetStyle from './WhiteStyle.png';

export function BlueWidget() {
  return <img alt="Blue colored widget" src={BlueWidgetStyle} />;
}

export function BlackWidget() {
  return <img alt="Black colored widget" src={BlackWidgetStyle} />;
}

export function WhiteWidget() {
  return <img alt="White colored widget" src={WhiteWidgetStyle} />;
}
