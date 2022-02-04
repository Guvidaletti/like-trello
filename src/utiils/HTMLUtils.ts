export function getMergedClassNames(
  arr: (string | undefined | number)[]
): string {
  return arr.filter((s) => s || String(s).length).join(' ');
}
