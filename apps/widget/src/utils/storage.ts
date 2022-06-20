const storageAvailable = (type: 'sessionStorage' | 'localStorage') => {
	try {
		const storage = window[type];
		const x = '__storage_test__';

		storage.setItem(x, x);
		storage.removeItem(x);

		return true;
	}
	catch (e) {
		return false;
	}
};

/**
 * NOTE: SafeStorage is intended for non-critical storage usage
 * since it no-ops when storage is not available and silences storage errors
 * use storageAvailable and try/catch for critical usages
 */
export class SafeStorage {
	storage: null | Storage;

	constructor(type: 'sessionStorage' | 'localStorage') {
		this.storage = storageAvailable(type) ? window[type] : null;
	}

	getItem(key: string) {
		return this.storage ? this.storage.getItem(key) : null;
	}

	removeItem(key: string) {
		if (this.storage) {
			this.storage.removeItem(key);
		}
	}

	setItem(key: string, value: string) {
		if (this.storage) {
			try {
				this.storage.setItem(key, value);
			}
			catch (e) {
				// At this point we already checked if we can write to the storage
				// However, this may still fail when we run out of write quotas
			}
		}
	}
}

export const safeSessionStorage = new SafeStorage('sessionStorage');
