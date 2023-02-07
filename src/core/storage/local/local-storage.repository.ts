export interface LocalStorageRepository {
  setToken: (token: string) => void;
  getToken: () => string | null;
  deleteToken: () => void;
}