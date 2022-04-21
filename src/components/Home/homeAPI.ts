// A mock function to mimic making an async request for data
export function fetchStoreData() {
  return new Promise<{ published: boolean }>((resolve) =>
    setTimeout(() => resolve({ published: true }), 100)
  );
}
