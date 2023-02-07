import { TOKEN_KEY } from "domain/_app.constants"
import { LocalStorageRepository } from "core/storage/local/local-storage.repository"

export default class LocalStorage implements LocalStorageRepository {
  private storage  = typeof window !== 'undefined' ? window.localStorage : null
  
  setToken(token: string) {
    this.storage?.setItem(TOKEN_KEY, token)
  }

  getToken() {
    return this.storage?.getItem(TOKEN_KEY) ?? null
  }

  deleteToken() {
    return this.storage?.removeItem(TOKEN_KEY)
  }
}