import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>你的第一个顶部路由成功了</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
