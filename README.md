# mafmodule
A simple Javascript module that contains functions that which might make your life easier.
### remove(arr, index)
A function that requires two parameters, an array, and the index of the element you wanna remove from it.

```javascript
let arr = ['first', 'second', 'third'];
arr = remove(arr, 0);
console.log(arr);
// ['second', 'third']
```

### shuffle(arr)
A function that shuffles an array randomly that you provide as a parameter to it.

```javascript
let arr = ['first', 'second', 'third'];
arr = shuffle(arr);
console.log(arr);
// ['second', 'first', 'third']
```

### count(arr, el)
A function that counts the number of duplicates of an element in an array.

```javascript
let arr = [1,2,3,2,2,'two'];
console.log(count(arr, 2))
// 3
```
