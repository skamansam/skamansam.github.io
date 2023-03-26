/** Utility library to handle ancillary functionality. */

/** capitalize all words in a string */
export function capitalize(str: string): string {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}