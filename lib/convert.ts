export function fToC(f: number): number {
  const temp = ((f - 32) * 5) / 9;
  return Math.round(temp);
}
