import type { WidgetConfiguration } from './mainSlice';
import { GetAuthHeaders } from './utils'

export async function fetchStoreStatus(): Promise<{ published: boolean }> {
  let response = await fetch('/api/v1/publish', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });
  return response.json();
}

export async function fetchStoreURL(): Promise<{ secure_url: string }> {
  let response = await fetch('/api/v1/preview', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });
  return response.json();
}

export async function publishWidget(): Promise<string> {
  let response = await fetch('/api/v1/publish', {
    method: 'POST',
    headers: GetAuthHeaders(),
  });

  return response.text();
}

export async function removeWidget(): Promise<string> {
  let response = await fetch('/api/v1/publish', {
    method: 'DELETE',
    headers: GetAuthHeaders(),
  });
  return response.text();
}

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
