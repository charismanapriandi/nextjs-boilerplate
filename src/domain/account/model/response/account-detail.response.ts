import { Roles } from "core/enum";
import { IBusiness } from "domain/business.model";
import { IStore } from "domain/store/store.model";

export interface AccountDetailResponse {
  _id: string;
  created_at: string;
  updated_at: string;
  kind: Roles[];
  name: string;
  email: string;
  business?: IBusiness;
  storePlacement?: IStore[]
}
