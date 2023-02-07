import { KeoTableOrderType } from "../interface";
import { descendingComparator } from "./descending-comparator.utils";

export function getComparator<T>(
  sort: KeoTableOrderType,
  sortBy: keyof T | undefined,
): (a: T, b: T) => number {
  return sort === 'desc'
    ? (a, b) => descendingComparator(a, b, sortBy)
    : (a, b) => -descendingComparator(a, b, sortBy);
}