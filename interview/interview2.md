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

# React Lifecycle Methods
  getDerivedStateFromProps :
    Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. It expects to return an object that will be the new state, or null to update nothing.

  componentDidMount :
    Executed after first rendering and here all `AJAX` requests, `DOM` or `state` updates, and set up `eventListeners` that should occur.

  shouldComponentUpdate :
    Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.

  getSnapshotBeforeUpdate :
    Invoked right after a component render happns because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`.

  componentDidUpdate :
    Mostly it is used to update the `DOM` in response to prop or state changes.

  componentWillUnmount :
    It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

  componentDidCatch :  
    Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the `child` component tree (below this component), log errors, and display a UI with error information.
