const remove = (arr, index) => arr.filter((el, i) => i !== index)

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

const count = (arr, el) => {
  return arr.filter((arrEl) => arrEl === el).length;
};

const range = (start, end, steps = 1) => {
  let arr = []
  steps = steps === 0 ? 1 : steps
  for (let i = start; i < end; i += steps) {
    arr.push(i)
  }
  return arr
}
