// we have function which takes some input
// it proceesses it to given limit
// a iteratee func should be called with two args input and callback func
//if all the input processed, call callback func on remaining inputs

function getUserById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // write your solution here

  let i = 0;
  let responses = [];
  let completedTasks = 0;

  function postCompletionCallback(activeIndex, output) {
    responses[activeIndex] = output;
    completedTasks += 1;

    if (completedTasks === inputs.length) {
      callback(responses);
      return;
    }

    if (i < inputs.length) {
      iterateeFn(inputs[i], postCompletionCallback.bind(null, i));
      i += 1;
    }
  }

  while (i < limit) {
    iterateeFn(inputs[i], postCompletionCallback.bind(null, i));
    i += 1;
  }
}


mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
