import { IAddress } from "domain/address.model";

export interface IBusiness {
  name: string;
  address?: IAddress;
}