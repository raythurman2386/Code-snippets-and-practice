import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useToggle = () => {
  const [toggle, setToggle] = useLocalStorage('toggle')

  // if toggle is true do something
  // else remove something
  useEffect(() => {
    // do your logic here
  }, [toggle])

  return [toggle, setToggle]
}
