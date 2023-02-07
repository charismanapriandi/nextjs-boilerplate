export interface IFactoryCreate {
  module: any
}

export interface IFactory {
  create: <T> () => IFactoryCreate
}