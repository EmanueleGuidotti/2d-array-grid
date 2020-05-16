# Interactive 2D Array Grid, in react native

Initial data is:
```
const data = [
    [0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0]
];
```

## Intro 

Given a 2d array of numbers I want to create a grid of squares. The cells could be black or white depends on the value of the 2d array: if 1 color should be black, or white if is 0.

## Main purpose

Tapping a filled square I want to show the adjacent cells only if filled and consequential.  
*You can find the algorithm solution inside the utils.tsx*

## How to use

Just clone it and get going.

```
# install all dependencies.
$ yarn install

# Start developing and serve your app:
$ expo start

# run unit tests:
$ jest
```
