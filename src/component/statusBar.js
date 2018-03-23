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
        <View style = {{ height: StatusBar.currentHeight,backgroundColor: backgroundColor}}>
          <StatusBar barStyle={barStyle} />
        </View>
      )
    }
  }
}
export default Status;
