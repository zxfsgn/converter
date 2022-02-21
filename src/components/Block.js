import React from 'react'
import Changer from './Changer'
import Number from './Number'
import Rates from './Rates'

const Block = ({ side }) => {
  return (
    <div className='Block'>
      <Changer side={side} />
      <Number side={side} />
      <Rates side={side} />
    </div>
  )
}

export default Block