# mafmodule
A basic Javascript module that contains a few functions that which might make your life easier.

## Link to HTML File
Add this line before your ending body tag (above other scripts that use this module).

```html
<script src="https://cdn.jsdelivr.net/gh/mafgit/mafmodule@master/mafmodule.js"></script>
```

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

```js
let arr = ['first', 'second', 'third'];
arr = shuffle(arr);
console.log(arr);
// ['second', 'first', 'third']
```

### count(arr, el)
A function that counts the number of duplicates of an element in an array.

```js
let arr = [1,2,3,2,2,'two'];
console.log(count(arr, 2))
// 3
```

### range(start, end, [steps])
A function that returns an array. It works like python's range function.

```js
for (let i of range(0, 5)) {
  console.log(i)
}
// 0 1 2 3 4
```
