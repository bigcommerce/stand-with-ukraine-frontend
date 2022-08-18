export function getBaseURL(): string {
  return import.meta.env.PROD ? import.meta.env.VITE_PUBLIC_URL : import.meta.env.BASE_URL;
}
