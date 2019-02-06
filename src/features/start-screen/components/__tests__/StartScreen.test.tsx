import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import StartScreen, { Props } from '../StartScreen'
import { AddCounter } from '../../actions'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'

describe('<StartScreen />', () => {
  it('renders correctly', () => {
    const props: Props = {
      counter: 0,
      addCounter: () => ({} as AddCounter),
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }
    const wrapper = shallow(<StartScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
