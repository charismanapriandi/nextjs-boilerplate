import { Module } from "@core";
import { InventoryStore } from "domain/inventory/inventory.store";

@Module({
  stores: [InventoryStore]
})
export class InventoryModule {};
