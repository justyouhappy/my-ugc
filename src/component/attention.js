import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleList from './articleList.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  render() {
    return (
      <ArticleList articleList={this.state.list}/>
    );
  }
}

const styles = StyleSheet.create({
});
