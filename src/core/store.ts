import { NODE_ENV } from "../domain/_app.constants";

export default class Store {
  private static registry: Map<string, any> = new Map()

  static register(key: string, instance: any) {
    if (!Store.registry.has(key)) {
      Store.registry.set(key, instance);
      if (NODE_ENV === 'development') {
        console.info(`%cAdded ${key} to the store registry.`, 'color:#5CE402');
      }
    }
  }

  static get = <T> (key: string): T => {
    const store = Store.registry.get(key);
    if (!store) throw new Error(`${key} is not found in the store registry`);
    return store;
  }
}
