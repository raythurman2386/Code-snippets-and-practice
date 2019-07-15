# Difference between == and ===
  Triple equals (===) checks for strict equality, which means both type and value must be the same. Double equals (==) on the other hand will first perform type coercion so that both parameters are the same type before comparing. Whenever possible use ===

# What is the difference between postfix i++ and prefix ++i?
  Both increment the variable value by 1. The difference is what they evaluate to. 

  The postfix increment operator evaluates to the value before it was incremented

    let i = 0
    i++ // 0
    // i === 1

# What are truthy and falsy values in JavaScript
  A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially they are values that are coerced true or false.

  6 falsy values in JavaScript
    
    false   undefined   null    ""     NaN     0

  A values truthiness can be examined by passin it into a Boolean function

    Boolean("") //false
    Boolean([]) //true

# How do you pass an argument to an event handler or callback
  You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`

    <button onClick={() => this.handleClick(id)}>
    <button onClick={this.handleClick.bind(this, id)}>

# Difference between a static method and an instance method
  Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

    Array.isArray // static method of Array
    Array.prototype.push // instance method of Array

  In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.

  Instance methods could technically work as static methods, but provide terser syntax:

    const arr = [1,2,3];
    arr.push(4);
    Array.push(arr, 4);

# Generate an array, containing the Fibonacci sequence up to the nth term
  Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two

    const fibonacci = n =>
      [...Array(n)].reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
      )

# Difference between an expression and a statement in JavaScript
  There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement, summarized as:

    Expression: produces a value
    Statement: performs an action
    Espression Statement: produces a value and performs action

  Rule of thumb: 
  
  `If you can print it or assign it to a variable, it's an expression. If you can't, it's a statement.`

# What is the `alt` attribute on images
  The alt attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to desribe any images except those which only serve a decorative purpose, in which case it should be left empty.

# What is the difference between lexical scoping and dynamic scoping
  Lexica lscoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.

# What does lifting state up in React mean
  When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. 

  For example, if two child components share the same data, it is recommended to move the shared state to the parent instead of maintaining the local state in both child components.

# What is recursion and when is it useful
  Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.

  For example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI.

    const nest = (items, id = null, link = "parent_id") =>
      items
        .filter(item => item[link] === id)
        .map(item => ({...item, children: nest(items, item.id)}));

    const comments = [
      { id: 1, parent_id: null, text: "First reply to post." },
      { id: 2, parent_id: 1, text: "First reply to comment #1." },
      { id: 3, parent_id: 1, text: "second reply to comment #1." },
      { id: 4, parent_id: 3, text: "First reply to comment #3." },
      { id: 5, parent_id: 4, text: "First reply to comment #4." },
      { id: 6, parent_id: null, text: "First reply to post." },
    ]

    nest(comments);

# What are JavaScript data types
  The latest ECMAScript standard defines seven data types, six of them being primitive: 
  
  `Boolean, Null, Undefined, Number, String, Symbol` and one non primitive data type: `Object`.

    Mention of newly added Symbol data type
    Array, Date and Function are all of type object
    Functions in JS are objects with the capability of being callable.