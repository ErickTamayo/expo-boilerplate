import { ADD_COUNTER } from '../constants'

export interface AddCounter {
  type: ADD_COUNTER
}

export const addCounter = (): AddCounter => ({
  type: ADD_COUNTER,
})
