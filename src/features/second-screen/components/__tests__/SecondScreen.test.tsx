import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import SecondScreen, { Props } from '../SecondScreen'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'

describe('<SecondScreen />', () => {
  it('renders correctly', () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const wrapper = shallow(<SecondScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
