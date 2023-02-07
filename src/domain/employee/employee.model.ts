import { Roles } from "core/enum/roles.enum";
import { IStore } from "domain/store/store.model";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  kind: Roles[];
  storePlacement: IStore[];
  joinDate: Date;
}