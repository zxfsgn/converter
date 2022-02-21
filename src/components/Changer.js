import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency, setNumber } from '../redux/actions'

const Changer = ({ side }) => {
  const [currency, currencies, number] = useSelector((state) => [state.currency[side], state.currencies, state.number.left])
  const dispatch = useDispatch()

  function handleChange(e) {
    const name = e.target.value
    dispatch(setCurrency(side, name))
    dispatch(setNumber('left', number))
  }

  return (
    <Select
      fullWidth
      variant='standard'
      value={currency}
      inputProps={{ 'aria-label': 'Without label' }}
      onChange={(e) => handleChange(e)}
    >
      {Object.keys(currencies.rates).map((name) =>
        <MenuItem key={name} value={name}>
          <div className='Currency'>{name}</div>
          <div className='Symbol'>{currencies.symbols[name]}</div>
        </MenuItem>)}
    </Select>
  )
}

export default Changer