# Difference between == and ===
  Triple equals (===) checks for strict equality, which means both type and value must be the same. Double equals (==) on the other hand will first perform type coercion so that both parameters are the same type before comparing. Whenever possible use ===

# What is the difference between postfix i++ and prefix ++i?
  Both increment the variable value by 1. The difference is what they evaluate to. 

  The postfix increment operator evaluates to the value before it was incremented

    let i = 0
    i++ // 0
    // i === 1


