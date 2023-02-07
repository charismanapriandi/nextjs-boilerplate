import { AccountStore } from "domain/account/account.store";
import { Module } from "@core";

@Module({
  stores: [AccountStore],
})
export class AccountModule {};
