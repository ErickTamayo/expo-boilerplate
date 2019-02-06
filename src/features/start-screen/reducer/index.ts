import { ADD_COUNTER } from '../constants'
import { AddCounter } from '../actions'
import StartScreenState from '../records/StartScreenState'

export type ScreenStateAction = AddCounter

export default function startScreenReducer(
  state: StartScreenState = new StartScreenState({ counter: 13 }),
  action: ScreenStateAction
): StartScreenState {
  switch (action.type) {
    case ADD_COUNTER:
      return state.update('counter', counter => counter + 1)
    default:
      return state
  }
}
