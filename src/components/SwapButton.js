import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumber, swapCurrencies } from '../redux/actions'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';

const SwapButton = () => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.number.left)

  return (
    <SwapHorizRoundedIcon
      sx={{ fontSize: 70 }}
      className='SwapButton'
      onClick={() => {
        dispatch(swapCurrencies())
        dispatch(setNumber('left', number))
      }}></SwapHorizRoundedIcon>
  )
}

export default SwapButton