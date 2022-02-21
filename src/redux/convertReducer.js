import { GET_CURRENCIES, SET_CURRENCY, SET_NUMBER, SWAP_CURRENCIES } from "./types"

const initialState = {
  currencies: null,
  currency: { left: 'RUB', right: 'USD' },
  number: { left: 0, right: 0 },
}

export const convertReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      let currencies = action.payload[0]
      currencies.symbols = {}
      for (let key in currencies.rates) {
        currencies.symbols[key] = action.payload[1].symbols[key]
      }
      return { ...state, currencies: currencies }
    case SET_CURRENCY:
      return { ...state, currency: { ...state.currency, ...action.payload } }
    case SET_NUMBER:
      let another = "left"
      if ("left" in action.payload) {
        another = "right"
      }
      let anotherNumber = Object.values(action.payload)[0] / state.currencies.rates[state.currency[Object.keys(action.payload)[0]]]
      anotherNumber = Math.round(anotherNumber * state.currencies.rates[state.currency[another]] * 10000) / 10000
      return { ...state, number: { ...action.payload, [another]: anotherNumber } }
    case SWAP_CURRENCIES:
      return { ...state, currency: { left: state.currency.right, right: state.currency.left } }
    default: return state
  }
}