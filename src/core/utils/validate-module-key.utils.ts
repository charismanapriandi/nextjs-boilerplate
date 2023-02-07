import { MODULE_KEYS } from "domain/_app.constants"

export default function validateModuleKeys(keys: string[]) {
  let invalidKeys: string[] = []
  
  for (const key of keys) {
    if (!(<any>Object).values(MODULE_KEYS).includes(key)) {
      invalidKeys.push(key)
    }
  }
  
  if (invalidKeys.length > 0) throw new Error(`${invalidKeys} is invalid as ModuleProperties`)
}