import { IAddress } from "domain/address.model";

export interface IStore {
  address: IAddress;
  id: string;
  name: string;
}