# [doodledob](https://edabit.com/user/9YZfhv8QycbHu3XeQ)

```javascript
function addUp(num) {
    let x = 0;
    while (num >= 0) {
        x += num;
        num--;
    }
    return x;
}
```

## Strategy

Doodledob approached this problem iteratively. Instead of using a mathematical formula, they used a `while` loop to calculate the sum of all integers from `1` to the given number `num`.

## Implementation

**`while` loop**: The loop iterates from the given number `num` down to `0`, adding each value to the variable `x`.

**Variable `x`**: This variable is initialized to `0` and accumulates the sum of all integers from `1` to `num`.

**Decrementing `num`**: The `num` variable is decremented in each iteration of the loop until it reaches `0`.

## Possible Refactors

This strategy could also be implemented using these approaches:

- A mathematical formula: `return (num * (num + 1)) / 2;`
- A `for` loop instead of a `while` loop
- Using recursion to calculate the sum

## References

For doodledob's solution, I reviewed how `while` loops work and explored alternative ways to calculate the sum of integers:

- `while` loop: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- Sum of integers formula: [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)

