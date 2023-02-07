import { MODULE_KEYS } from "domain/_app.constants"

export default function resolveModule(appModule: Function) {
  
  let temp: Function[] = []

  findModule(temp, appModule)

  const stores = temp.map(i => {
    const fn: any[] = Reflect.getMetadata(MODULE_KEYS.STORES, i)
    return fn.map(f => ({[f.name]: new f()}))
  }).flat()

  return {
    stores
  }
}

function findModule(temp: Function[], moduleData: Function) {
  const values = Reflect.getMetadata(MODULE_KEYS.IMPORTS, moduleData)
  
  if (values) {
    temp.push(...values)
    findModule(temp, values)
  }
}

// function findStore(temp: Function[], moduleData: Function[]) {
//   const values: Function[] = moduleData.map(i => Reflect.getMetadata(ModuleKeys.Stores, i))

//   if (values) {
//     temp.push(values as any)
//     findStore(temp, values)
//   }
// }
