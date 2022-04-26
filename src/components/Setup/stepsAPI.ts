import { GetAuthHeaders } from '../../utils';
import { WidgetConfiguration } from './setupSlice';

export async function readConfiguration(): Promise<WidgetConfiguration> {
  let response = await fetch('/api/v1/configuration', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });
  return response.json();
}

export async function writeConfiguration(
  widgetConfiguration: WidgetConfiguration
) {
  let response = await fetch('/api/v1/configuration', {
    method: 'POST',
    headers: {
      ...GetAuthHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(widgetConfiguration),
  });

  return response.text();
}
