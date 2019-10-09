import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setStoredValue] = useState(() => {
    // check in local storage for the key passed in
    const item = window.localStorage.getItem(key)

    // return the parsed item or the initial value
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    setStoredValue(value)

    // save the new value to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [value, setValue]
}
