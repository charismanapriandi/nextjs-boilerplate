import { ICategory } from "domain/category/category.model";

export interface IInventory {
  capitalPrice: number;
  createdAt: Date;
  name: string;
  owner: string;
  sellingPrice: number;
  sku: string;
  stock: number;
  updatedAt: Date;
  category?: ICategory;
  id: string;
}