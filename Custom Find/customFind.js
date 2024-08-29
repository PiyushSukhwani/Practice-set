// Advance Approach
if(!Array.prototype.customFind) {   // checks wheather customFind is already defined then it will not modify existing one
    Object.defineProperty(Array.prototype, 'customFind', {   // adds customFind method to Array Object
        value: function(predicate) {
            if(typeof predicate !== 'function') {  // checks whether typeOf predicate is function or else throws typeError
                throw new TypeError("predicate must be a function");
            }

            const list = Object(this);
            const length = list.length;

            for(let i = 0; i < length; i++) {
                let element = list[i];
                if(predicate(element, i, list)) {
                    return element;
                }
            }
            return undefined;
        },

        writable: true,
        configurable: true,
    })
}

// Genral Approach
// Array.prototype.customFind = function (predicate) {
//   if (typeof predicate !== "function") {
//     throw new TypeError("predicate must be a function");
//   }
//   const array = this
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     let element = array[i];
//     if (predicate(element, i, array)) {
//       return element;
//     }
//   }
//   return undefined;
// };

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "bob", age: 35 },
  { id: 3, name: "Rahul", age: 20 },
  { id: 4, name: "Jaggu", age: 55 },
  { id: 5, name: "JJ", age: 30 },
];

function findUser(user) {
  return user.age > 20
}
const result = users.customFind(findUser);
console.log(result);
