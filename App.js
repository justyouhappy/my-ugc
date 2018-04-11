import {StackNavigator ,TabNavigator,DrawerNavigator} from 'react-navigation';  
import Nav from './src/page/nav.js';
import Post from './src/page/post.js'
import Sigin from './src/page/sigin.js'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './src/lib/config.js';
window.config = config;
const Navigator = StackNavigator({
    Home: { screen: Nav },
    Post: { screen: Post },
    Sigin: { screen: Sigin }
}, {
    initialRouteName: 'Home',
    mode: 'modal'
});  
export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Navigator/>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});