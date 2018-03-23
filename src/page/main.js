import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Recommend from '../component/recommend.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Attention from '../component/attention.js';

export default TabNavigator({
  '推荐': { screen: Recommend },
  '关注': { screen: Attention },
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 15,
      color: '#000'
    },
    tabBarComponent: TabBarTop,
    style: {
      backgroundColor: '#fff',
    },
  },
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  }
});
