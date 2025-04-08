/**
 * Calculates the sum of all integers from 1 to the given number `n`.
 *
 * This function uses the formula for the sum of the first `n` natural numbers:
 * Sum = n * (n + 1) / 2
 *
 * @param {number} n - A positive integer representing the upper limit of the range.
 * @returns {number} - The sum of all integers from 1 to `n`.
 *
 * @example
 * addUp(4); // Returns 10 (1 + 2 + 3 + 4 = 10)
 * addUp(100); // Returns 5050 (sum of integers from 1 to 100)
 */

export const addUp = (n) => n*++n/2;
