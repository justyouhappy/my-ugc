import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform
} from 'react-native';
class Status extends Component {

  render() {
    const {backgroundColor, barStyle} = this.props
    if (Platform.OS === 'ios') {
      return (
        <StatusBar barStyle={barStyle} />
      )
    } else if (Platform.OS === 'android') {
      return(
        <View style = {{backgroundColor: backgroundColor}}>
          <StatusBar barStyle={barStyle} backgroundColor={backgroundColor}/>
        </View>
      )
    }
  }
}
export default Status;
