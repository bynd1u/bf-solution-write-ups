# [master777](https://edabit.com/user/qeFAzzrvoEZBD2mfc)

```javascript
addUp = (n) => n * ++n / 2;
```

## Strategy

Master777 approached this problem mathematically by using the formula for the sum of the first `n` natural numbers: `Sum = n * (n + 1) / 2`. This eliminates the need for loops or recursion, making the solution efficient and concise.

## Implementation

**Mathematical formula**: The implementation directly applies the formula for the sum of integers from `1` to `n`.

**Arrow function**: Master777 used an arrow function for a concise, one-line implementation.

**Implicit return**: Since the function consists of a single expression, the `return` keyword is omitted, and the result is returned implicitly.

## Possible Refactors

This strategy is already optimal, but it could be rewritten in other ways for educational purposes:

- Using a `for` loop to calculate the sum iteratively
- Using a `while` loop to achieve the same result
- Writing the function in a traditional `function` declaration style

## References

For master777's solution, I reviewed the formula for the sum of the first `n` natural numbers and explored alternative ways to calculate the sum:

- Sum of integers formula: [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)
- Arrow functions: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)