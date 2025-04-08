/**
 * Calculates the sum of all integers from 1 to the given number `num`.
 *
 * This function uses a `while` loop to iteratively add all integers from `num` down to 1.
 *
 * @param {number} num - A positive integer representing the upper limit of the range.
 * @returns {number} - The sum of all integers from 1 to `num`.
 *
 * @example
 * addUp(4); // Returns 10 (1 + 2 + 3 + 4 = 10)
 * addUp(100); // Returns 5050 (sum of integers from 1 to 100)
 */
function addUp(num) {
   let x=0;
   while(num>=0)
       {
           x+=num;
           num--;
       }
   return x;
}

export { addUp };