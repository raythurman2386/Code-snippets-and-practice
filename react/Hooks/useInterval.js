import { useState, useEffect, useRef } from 'react'

const useInterval = (cb, delay) => {
  const savedCalback = useRef()

  // Remember the last callback
  useEffect(() => {
    savedCalback.current = cb
  }, [cb])

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCalback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Timer = props => {
  // hook for the timer
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(0)

  // useInterval for the timer
  useInterval(() => {
    if (seconds === 0 && minutes === 0) {
      alert('Game Over!!')
    } else if (seconds <= 0) {
      setMinutes(minutes - 1)
      setSeconds(59)
    } else {
      setSeconds(seconds - 1)
    }
  }, 1000)

  let newMinute = minutes < 10 ? '0' + minutes : minutes
  let newSecond = seconds < 10 ? '0' + seconds : seconds

  // Return the timer using string interpolation to have the colon
  return <div className='timer'>{`${newMinute}:${newSecond}`}</div>
}

export default Timer
