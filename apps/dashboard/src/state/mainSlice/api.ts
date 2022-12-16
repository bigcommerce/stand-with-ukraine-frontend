import { DEFAULT_CONFIG } from 'config';
import type { WidgetConfiguration } from 'config/types';

import { GetAuthHeaders, IsUniversalInstaller } from '../utils';

export async function fetchStoreStatus(): Promise<{ published: boolean }> {
  if (IsUniversalInstaller()) {
    return {
      published: false,
    };
  }

  const response = await fetch('/api/v1/publish', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function fetchStoreURL(): Promise<{ secure_url: string }> {
  if (IsUniversalInstaller()) {
    return {
      secure_url: '',
    };
  }

  const response = await fetch('/api/v1/preview', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function publishWidget(): Promise<string> {
  if (IsUniversalInstaller()) {
    return 'success';
  }

  const response = await fetch('/api/v1/publish', {
    method: 'POST',
    headers: GetAuthHeaders(),
  });

  return response.text();
}

export async function removeWidget(reason: string): Promise<string> {
  if (IsUniversalInstaller()) {
    return 'success';
  }

  const params = new URLSearchParams();

  params.set('reason', reason);

  const response = await fetch(`/api/v1/publish?${params.toString()}`, {
    method: 'DELETE',
    headers: GetAuthHeaders(),
  });

  return response.text();
}

export async function readConfiguration(): Promise<WidgetConfiguration> {
  if (IsUniversalInstaller()) {
    return DEFAULT_CONFIG;
  }

  const response = await fetch('/api/v1/configuration', {
    method: 'GET',
    headers: GetAuthHeaders(),
  });

  return response.json();
}

export async function writeConfiguration(widgetConfiguration: WidgetConfiguration) {
  if (IsUniversalInstaller()) {
    return {
      DEFAULT_CONFIG,
      ...widgetConfiguration,
    };
  }

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
