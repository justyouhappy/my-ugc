import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends React.Component {
  render() {
    const {detail} = this.props
    return (
      <View>
        <Text>{detail.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
