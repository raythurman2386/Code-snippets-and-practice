import { useLocalStorage } from './useLocalStorage'

export const useInput = (key, initialValue) => {
  // passing the values from each input directly to LS
  const [value, setValue] = useLocalStorage(key, initialValue)

  // moves the handleChange into a custom hook
  const handleChanges = updatedValue => {
    setValue(updatedValue)
  }

  // Returning destructured array
  return [value, setValue, handleChanges]
}
