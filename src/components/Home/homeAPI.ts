import { GetHeaders } from '../../utils';

export async function fetchStoreStatus(): Promise<{ published: boolean }> {
  let response = await fetch('/api/v1/publish', {
    method: 'GET',
    headers: GetHeaders(),
  });
  return response.json();
}

export async function publishWidget(): Promise<string> {
  let response = await fetch('/api/v1/publish', {
    method: 'POST',
    headers: GetHeaders(),
  });
  return response.text();
}

export async function removeWidget(): Promise<string> {
  let response = await fetch('/api/v1/publish', {
    method: 'DELETE',
    headers: GetHeaders(),
  });
  return response.text();
}
