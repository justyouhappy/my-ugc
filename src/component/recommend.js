import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends React.Component {
  render() {
    return (
      <ScrollView 
        horizontal={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <Text >你的第一个app成功了</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
