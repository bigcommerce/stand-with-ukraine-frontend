const TOKEN_KEY = 'app-bearer-token';

export function SetSessionToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function GetSessionToken() {
  return process.env.NODE_ENV === 'development'
    ? 'test.test.test'
    : sessionStorage.getItem(TOKEN_KEY);
}

export function GetAuthHeaders() {
  return {
    Authorization: `Bearer ${GetSessionToken()}`,
  };
}
