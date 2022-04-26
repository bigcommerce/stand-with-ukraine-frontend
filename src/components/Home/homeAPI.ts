import { GetAuthHeaders } from '../../utils';

export async function fetchStoreStatus(): Promise<{ published: boolean }> {
  let response = await fetch('/api/v1/publish', {
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
