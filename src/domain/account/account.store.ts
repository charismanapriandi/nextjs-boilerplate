import { LocalStorage, Store } from "@core";
import { IAccount } from "domain/account/model/account.model";
import { LoginPayload } from "domain/account/model/payload/login.payload";
import { RegisterPayload } from "domain/account/model/payload/register.payload";
import { AccountService } from "domain/account/account.service";
import { action, makeObservable, observable } from "mobx";

export class AccountStore {
  private accountService = new AccountService()
  private localStorage = new LocalStorage()

  @observable account: IAccount | null = null;
  @observable fetchingAccountDetail: boolean = false;

  constructor() {
    makeObservable(this)
  }

  @action
  login = (payload: LoginPayload) => {
    const res = this.accountService.login(payload)

    // do some stuff

  }

  @action
  register = (payload: RegisterPayload) => {
    const res = this.accountService.register(payload)

    // do some stuff

  }

  @action
  async getAccountDetail() {
    const { data } = await this.accountService.getAccountDetail()
    
    this.account = {
      ...data,
      id: data._id,
    }
  }
}
