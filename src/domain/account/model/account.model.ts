import { Roles } from "core/enum/roles.enum";
import { IBusiness } from "domain/business.model";
import { IStore } from "domain/store/store.model";

export interface IAccount {
  id: string;
  kind: Roles[];
  name: string;
  email: string;
  business?: IBusiness;
  storePlacement?: IStore[]
}