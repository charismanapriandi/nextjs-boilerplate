import { HttpTransmission } from "@core";
import { ConfirmEmailPayload } from "domain/account/model/payload/confirm-email.payload";
import { LoginPayload } from "domain/account/model/payload/login.payload";
import { RegisterPayload } from "domain/account/model/payload/register.payload";
import { AccountDetailResponse } from "domain/account/model/response/account-detail.response";
import { ConfirmEmailResponse } from "domain/account/model/response/confirm-email.response";
import { LoginResponse } from "domain/account/model/response/login.response";
import { RegisterResponse } from "domain/account/model/response/register.response";
import { AccountRepository } from "domain/account/account.repository";

export class AccountService implements AccountRepository {
  private http = new HttpTransmission()
  
  async login (payload: LoginPayload) {
    return await this.http.post<LoginResponse>('/auth/login', payload)
  };

  async register (payload: RegisterPayload) {
    return await this.http.post<RegisterResponse>('/auth/register', payload)
  }

  async confirmEmail (payload: ConfirmEmailPayload) {
    return await this.http.post<ConfirmEmailResponse>('/auth/confirm-email', payload)
  }

  async getAccountDetail () {
    return await this.http.get<AccountDetailResponse>('/user/detail')
  }
}