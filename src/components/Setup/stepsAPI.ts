import { GetHeaders } from '../../utils';
import { WidgetConfiguration } from './setupSlice';

export async function readConfiguration(): Promise<WidgetConfiguration> {
  let response = await fetch('/api/v1/configuration', {
    method: 'GET',
    headers: GetHeaders(),
  });
  return response.json();
}

export async function writeConfiguration(
  widgetConfiguration: WidgetConfiguration
) {
  let response = await fetch('/api/v1/configuration', {
    method: 'POST',
    headers: GetHeaders(),
    body: JSON.stringify(widgetConfiguration),
  });

  return response.text();
}
