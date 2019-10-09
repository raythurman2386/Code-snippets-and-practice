import axios from 'axios'
import { useState, useEffect } from 'react'

export const useAxios = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    axios
      .get
      // API here
      ()
      .then(res => setItem(res.data))
      .catch(err => console.log(err))
  }, [])

  return [item, setItem]
}
