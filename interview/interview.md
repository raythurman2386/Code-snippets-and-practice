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