import React, { useState } from 'react'

type Props = {
  counter: number | undefined
}

const CounterLoader = ({ counter }: Props) => {

  return (
    <div className='counter__page'>
      <div className='counter__container'>
      <div className="loader">
        <span className='counter'>{counter}</span>
      </div>
      </div>
    </div>
  )
}

export default CounterLoader