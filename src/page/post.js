import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View, Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Post extends React.Component {
  static navigationOptions = {
    headerTitle: '投稿',
    headerRight: (
        <Text
            onPress={() => alert('This is a button!')}
        >Info</Text>
    ),
    titleStyle: {
        textAlign: 'center',
        color: '#000',
        justifyContent: 'space-between'
    },
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <Text onPress={() => {
            this.props.navigation.goBack()
        }}>你的第四个app成功了</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
