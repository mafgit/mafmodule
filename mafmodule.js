// Remove element from an array
const remove = (arr, index) => arr.filter((el) => arr.indexOf(el) !== index);
// let arr = [0,1,2,3]
// arr = remove(arr, 2)
// console.log(arr)

// Shuffle an array
const shuffle = (arr) => {
  let newArr = [];
  let indices = [];
  while (arr.length !== newArr.length) {
    let index = Math.floor(Math.random() * arr.length);
    if (!indices.includes(index)) {
      indices.push(index);
      newArr.push(arr[index]);
    }
  }
  return newArr;
};
// console.log(shuffle([1, 2, 2, 2, 2, 3, 4, 4]))

// Count number of duplicates of an element in an array
const count = (arr, el) => {
  return arr.filter((arrEl) => arrEl === el).length;
};
// let arr = [1,2,3,2,2,'two'];
// console.log(count(arr, 2))
