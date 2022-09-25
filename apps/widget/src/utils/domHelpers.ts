export function hideBodyOverflow(hide: boolean) {
  if (document.body) {
    document.body.style.overflow = hide ? 'hidden' : 'initial';
  }
}
