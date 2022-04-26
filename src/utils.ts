export function SetSessionToken(token: string) {
  sessionStorage.setItem('app-bearer-token', token);
}
export function GetSessionToken() {
  return sessionStorage.getItem('app-bearer-token') || '';
}
export function GetHeaders() {
  return {
    Authorization: `Bearer ${GetSessionToken()}`,
    'Content-Type': 'application/json',
  };
}
