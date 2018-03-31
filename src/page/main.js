import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Recommend from '../component/recommend.js';
import Attention from '../component/attention.js';

const Tab = TabNavigator({
  '推荐': { screen: Recommend },
  '关注': { screen: Attention },
}, {
  tabBarComponent: TabBarTop,
  tabBarOptions: {
    activeTintColor: 'tomato',
    labelStyle: {
      fontSize: 15,
      color: '#000'
    },
    style: {
      backgroundColor: '#fff',
      height: 55,
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 55,
    },
    showIcon: false,
  },
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  initialRouteName: '推荐',
  backBehavior: true,
})
export default class Main extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Tab></Tab>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

