import { IModuleMetadata, validateModuleKeys } from '@core'

export function Module(metadata: IModuleMetadata): ClassDecorator {
  const propsKeys = Object.keys(metadata) as any;
  validateModuleKeys(propsKeys)

  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, (metadata as any)[property], target);
      }
    }
  };
}
