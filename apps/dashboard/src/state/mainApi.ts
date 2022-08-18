import type { WidgetConfiguration } from 'config/types';

import { GetAuthHeaders } from './utils';

export async function fetchStoreStatus(): Promise<{ published: boolean }> {
  const response = await fetch('/api/v1/publish', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function fetchStoreURL(): Promise<{ secure_url: string }> {
  const response = await fetch('/api/v1/preview', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function publishWidget(): Promise<string> {
  const response = await fetch('/api/v1/publish', {
    method: 'POST',
    headers: GetAuthHeaders(),
  });

  return response.text();
}

export async function removeWidget(reason: string): Promise<string> {
  const params = new URLSearchParams();

  params.set('reason', reason);

  const response = await fetch(`/api/v1/publish?${params.toString()}`, {
    method: 'DELETE',
    headers: GetAuthHeaders(),
  });

  return response.text();
}

export async function readConfiguration(): Promise<WidgetConfiguration> {
  const response = await fetch('/api/v1/configuration', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function writeConfiguration(widgetConfiguration: WidgetConfiguration) {
  const response = await fetch('/api/v1/configuration', {
    method: 'POST',
    headers: {
      ...GetAuthHeaders(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(widgetConfiguration),
  });

  return response.text();
}
