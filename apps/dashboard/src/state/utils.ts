const TOKEN_KEY = 'app-bearer-token';
const UNIVERSAL_INSTALLER_TOKEN = 'universal.installer.stand-with-ukraine';
const DEVELOPMENT_TOKEN = 'test.test.test';

export function SetSessionToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function GetSessionToken() {
  return (
    sessionStorage.getItem(TOKEN_KEY) ??
    (process.env.NODE_ENV === 'development' ? DEVELOPMENT_TOKEN : null)
  );
}

export function IsUniversalInstallerToken(token: string): boolean {
  return token === UNIVERSAL_INSTALLER_TOKEN;
}

export function IsUniversalInstaller() {
  return IsUniversalInstallerToken(GetSessionToken() ?? '');
}

export function GetAuthHeaders() {
  return {
    Authorization: `Bearer ${GetSessionToken()}`,
  };
}

export function GetBaseURL(): string {
  return `${location.origin}${location.pathname}`;
}
