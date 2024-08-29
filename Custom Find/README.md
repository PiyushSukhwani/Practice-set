# Custom Array Find Method

This repository provides a custom implementation of the `Array.prototype.find`. This is designed to closely mimic behaviour of native `find` method provided by Javascript's Array object.

## Overview

The `customFind` method is an extension to the `Array.prototype` that searches through an array and returns the first element that satisfies a provided preicate function. It behaves similarly to the native `find` method.

## Features

- *Predicate Function*: Allows you to pass a function to test each element of the array.
- *Arguments*: The predicate function receives three arguments:
  - element: The current element being tested.
  - index: The index of the current element in the array.
  - array: The array on which customFind was called.
- *Return Value*: Returns the first element that satisfies the predicate function. If no elements match, it returns undefined.

## Explanation

- *Predicate Function*: The predicate function tests each element in the array. It should return a boolean indicating if the element meets the condition.
- *Arguments*: The predicate function is called with:
  - element - The element being tested.
  - index - The index of the element in the array.
  - array - The array on which customFind was invoked.
- *Return Value*: If an element matches the predicate, it is returned. If no element matches, undefined is returned.

## Compatibility

The customFind method is added to Array.prototype, making it available on all array instances. Be cautious when modifying built-in prototypes to avoid potential conflicts with other code or libraries.