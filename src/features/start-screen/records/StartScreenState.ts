import { Record } from 'immutable'

export interface State {
  counter: number
}

const defaultState: State = {
  counter: 0,
}

export default class StartScreenState extends Record(defaultState) implements State {
  public readonly counter!: number
}
