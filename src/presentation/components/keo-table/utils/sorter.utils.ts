export function sorter<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const sort = comparator(a[0], b[0]);
    if (sort !== 0) {
      return sort;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
