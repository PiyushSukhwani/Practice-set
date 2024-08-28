# mapLimit Function

The mapLimit function processes an array of inputs with a specified concurrency limit. It ensures that only a maximum number of operations are executed concurrently.

## Function Signature

```javascript
mapLimit(inputs, limit, iterateeFn, callback);

### Parameters

- inputs (Array): The array of items to be processed.

- limit (Number): The maximum number of operations at any given time.

- iterateeFn (Function): The async function that should be called with each input to generate the corresponding output. It will have two arguments:
  - input (any): The input being processed.
  - callback (Function): A function that will be called when the input is finished processing. It will be provided with one argument, the processed output.
  
- callback (Function): A function that should be called with the array of outputs once all inputs have been processed.