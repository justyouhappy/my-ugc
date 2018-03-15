import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Recommend from '../component/recommend.js';
import Attention from '../component/attention.js';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView >
          <View tabLabel='推荐' style={styles.content}><Recommend></Recommend></View>
          <View tabLabel='关注' style={styles.content}><Attention></Attention></View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  }
});
