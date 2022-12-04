import React, { useState } from 'react'

const CounterLoader = () => {

    const [counter, setCounter] = useState<number>(3)

  return (
    <div>
        <span></span>
    </div>
  )
}

export default CounterLoader