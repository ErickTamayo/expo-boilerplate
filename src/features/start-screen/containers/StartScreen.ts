import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { State } from '../records/StartScreenState'
import StartScreen from '../components/StartScreen'
import { addCounter, AddCounter } from '../actions'

export interface StateProps {
  counter: number
}

export interface DispatchProps {
  addCounter: () => AddCounter
}

export const mapStateToProps = ({ startScreen }: { startScreen: State }): StateProps => ({
  counter: startScreen.counter,
})

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addCounter: () => dispatch(addCounter()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
