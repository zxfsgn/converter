import { CURRENCIES_URI, SYMBOLS_URI } from "../constants"
import { GET_CURRENCIES, SET_CURRENCY, SET_NUMBER, SWAP_CURRENCIES } from "./types"

export function getCurrencies() {
  return async dispatch => {
    const responseS = await fetch(SYMBOLS_URI)
    const jsonS = await responseS.json()
    const response = await fetch(CURRENCIES_URI)
    const json = await response.json()
    dispatch({ type: GET_CURRENCIES, payload: [json, jsonS] })
  }
}

export function setCurrency(side, currency) {
  return {
    type: SET_CURRENCY,
    payload: { [side]: currency }
  }
}

export function setNumber(side, number) {
  return {
    type: SET_NUMBER,
    payload: { [side]: number }
  }
}

export function swapCurrencies() {
  return {
    type: SWAP_CURRENCIES
  }
}