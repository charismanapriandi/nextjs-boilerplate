import { AxiosResponse } from "axios";
import { ConfirmEmailPayload } from "domain/account/model/payload/confirm-email.payload";
import { LoginPayload } from "domain/account/model/payload/login.payload";
import { RegisterPayload } from "domain/account/model/payload/register.payload";
import { AccountDetailResponse } from "domain/account/model/response/account-detail.response";
import { ConfirmEmailResponse } from "domain/account/model/response/confirm-email.response";
import { LoginResponse } from "domain/account/model/response/login.response";
import { RegisterResponse } from "domain/account/model/response/register.response";

export interface AccountRepository {
  login: (payload: LoginPayload) => Promise<AxiosResponse<LoginResponse>>;
  register: (payload: RegisterPayload) => Promise<AxiosResponse<RegisterResponse>>;
  confirmEmail: (payload: ConfirmEmailPayload) => Promise<AxiosResponse<ConfirmEmailResponse>>;
  getAccountDetail: () => Promise<AxiosResponse<AccountDetailResponse>>
}