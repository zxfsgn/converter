import React from 'react'
import { useSelector } from 'react-redux'

const Rates = ({ side }) => {
  let another = "left"
  if ("left" === side) {
    another = "right"
  }
  const [currency, anotherCurrency] = useSelector((state) => [state.currency[side], state.currency[another]])
  const rates = useSelector((state) => Math.round(state.currencies.rates[currency] / state.currencies.rates[anotherCurrency] * 10000) / 10000)

  return (
    <div className='Rates'>1 {currency} = {rates} {anotherCurrency}</div>
  )
}

export default Rates