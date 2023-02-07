import { KeoIconProps } from "presentation/components";
import { KeoTableColumnsProps } from "presentation/components/keo-table/KeoTable";

export type KeoTableOrderType = 'asc' | 'desc';

// pagination
type KeoTablePaginationTrue = { pagination?: true; paginationOptions?: { serverSide?: boolean; rowPerPageOptions?: number[] }}
type KeoTablePaginationFalse = { pagination?: false; paginationOptions?: never;}
export type KeoTablePagination = KeoTablePaginationFalse | KeoTablePaginationTrue

// select
// type KeoTableSelectTrue = { allow: true, multiple: boolean; }
// type KeoTableSelectTrue = { allow: false, multiple }

export interface Sticky {
  maxHeight: number
}

export interface Helpers<T> {
  rows: T[];
  columns: KeoTableColumnsProps<T>[];
  getSelected: () => void | T[]
}

export interface Action<T> {
  handler: (id: readonly T[keyof T][], helper: Helpers<T>) => void;
  icon?: KeoIconProps;
  label: string;
  allowMultiple?: boolean;
}

export interface KeoTableToolbarProps<T> {
  selectedId?: readonly T[keyof T][];
  idField: keyof T;
  title: string;
  numSelected: number;
  action?: Action<T>[]
  rows: T[],
  columns: KeoTableColumnsProps<T>[]
}

export interface KeoTableHeadProps<T> {
  order: KeoTableOrderType;
  orderBy: keyof T | undefined;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  onRequestSort: (property: keyof T) => (event: React.MouseEvent<unknown>) => void;
  rowCount: number;
  columns: KeoTableColumnsProps<T>[]
  action: boolean;
}