import { AppStore } from "./_app.store";
import { Module } from "core/decorator/module.decorator";
import { AccountModule } from "domain/account/account.module";
import { InventoryModule } from "domain/inventory/inventory.module";

@Module({
  imports: [AccountModule, InventoryModule],
  stores: [AppStore]
})
export class AppModule {}
