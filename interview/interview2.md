# What are Promises
  The Promise object represents the eventual completion (or failure) of an ansynchronous operation, and its resulting value. An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, not the catch, which can be used for error handling. `Promise` are chainable.

    new Promis((resolve, reject) => {
      setTimeout(() => {
        resolve("result")
      }, 100)
    })
      .then(console.log)
      .catch(console.error)

# In which states can a Promise be
  A Promise is in one of these states: 
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: the operation failed.

