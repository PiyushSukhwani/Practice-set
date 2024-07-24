const input = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[25]]]]]]]]]],
];

const display = document.querySelector(".display")

Array.prototype.flatten = function(depth = 1) {
    if (depth === 0) {
      return this.slice(); // returns the shallow copy of input array
    }
    function processing(arr, currentDepth) {
    const output = [];
      for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (Array.isArray(currentElement) && currentDepth > 0) {
          output.push(...processing(currentElement, currentDepth - 1)); // Recurse with reduced depth
        } else {
          output.push(currentElement);
        }
      }
      return output
    }
    return processing(this, depth);
  }


const flatArray = input.flatten(10);

console.log(flatArray);
display.innerHTML = `${JSON.stringify(flatArray, null, 2)}`
