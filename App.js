import {StackNavigator ,TabNavigator,DrawerNavigator} from 'react-navigation';  
import Nav from './src/page/nav.js';
import Post from './src/page/post.js'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navigator = StackNavigator({
    Home: { screen: Nav },
    Post: { screen: Post },
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