import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export interface Props extends NavigationInjectedProps {}

export default class SecondScreen extends React.Component<Props, object> {
  public render(): JSX.Element {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Button onPress={() => navigation.navigate('Start')} title="Go Back" color="#841584" />
      </View>
    )
  }
}
