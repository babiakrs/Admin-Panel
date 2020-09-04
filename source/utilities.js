export function cn(...cns) {
  return cns.reduce((acc, curr) => `${acc} ${curr}`).trim();
}