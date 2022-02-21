import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumber } from '../redux/actions'

const Number = ({ side }) => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.number[side])

  useEffect(() => {
    dispatch(setNumber('left', 5000))
  }, [dispatch])


  function handleChange(e) {
    e.preventDefault()
    dispatch(setNumber(side, e.currentTarget.value))
  }

  return (
    <div className='Number'>
      <input type="number" value={number} onChange={handleChange} />
    </div>
  )
}

export default Number