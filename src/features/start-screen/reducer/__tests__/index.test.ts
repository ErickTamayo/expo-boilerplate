import reducer from '../../reducer'
import StartScreenState from '../../records/StartScreenState'
import { ADD_COUNTER } from '../../constants'

describe('start-screen reducer', () => {
  let initialState: StartScreenState

  beforeEach(() => {
    initialState = new StartScreenState({ counter: 0 })
  })

  it('should increment counter', () => {
    const updatedState = reducer(initialState, {
      type: ADD_COUNTER,
    })

    const expectedState = initialState.set('counter', 1)

    expect(updatedState).toEqual(expectedState)
  })
})
