export function descendingComparator<T>(a: T, b: T, sortBy: keyof T | undefined) {
  if (!sortBy) return 0
  
  if (b[sortBy] < a[sortBy]) {
    return -1;
  }
  if (b[sortBy] > a[sortBy]) {
    return 1;
  }
  return 0;
}
