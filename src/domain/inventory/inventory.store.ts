import { observable } from "mobx";
import { IInventory } from './inventory.model'

export class InventoryStore {
  @observable products: IInventory[] | null = null
}