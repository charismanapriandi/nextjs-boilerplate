import { MODULE_KEYS } from "../domain/_app.constants";
import Store from "core/store";

export class Factory {
  public create (module: Function) {
    return this.resolveStore(module)
  };

  private resolveStore (module: Function) {
    const keys = Object.values(MODULE_KEYS)

    let temp = [];
    
    (function resolver(module: Function | Function[]) {
      for (const property of keys) {
        if (Array.isArray(module)) {
          const current = module.map(i => Reflect.getMetadata(property, i)).flat()
          current.forEach(i => {
            if (i) {
              temp.push(i)
            }
          })
        } else {
          const current = Reflect.getMetadata(property, module)
          if (current) {
            if (property === MODULE_KEYS.IMPORTS) {
              resolver(current)
            }
            if (property === MODULE_KEYS.STORES) {
              temp.push(current)
            }
          }
        }
      }
    }(module))

    temp.flat().map(store => Store.register(store.name, new store()))
  }
}
