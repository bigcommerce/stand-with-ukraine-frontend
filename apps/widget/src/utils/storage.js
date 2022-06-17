const storageAvailable = type => {
  try {
    const storage = window[type];
    const x = '__storage_test__';

    storage.setItem(x, x);
    storage.removeItem(x);

    return true;
  } catch (e) {
    return false;
  }
}

/**
 * NOTE: SafeStorage is intended for non-critical storage usage
 * since it no-ops when storage is not available and silences storage errors
 * use storageAvailable and try/catch for critical usages
 */
export class SafeStorage {
  constructor(type) {
    this.storage = storageAvailable(type) ? window[type] : null;
  }

  getItem(key) {
    return this.storage ? this.storage.getItem(key) : null;
  }

  removeItem(key) {
    if (this.storage) {
      this.storage.removeItem(key);
    }
  }

  setItem(key, value) {
    if (this.storage) {
      try {
        this.storage.setItem(key, value);
      } catch (e) {
        // At this point we already checked if we can write to the storage
        // However, this may still fail when we run out of write quotas
      }
    }
  }
}

export const safeSessionStorage = new SafeStorage('sessionStorage');
