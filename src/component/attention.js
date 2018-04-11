import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleList from './articleList.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          subtitle: 'Vice President',
          isFllow: true
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          subtitle: 'Vice Chairman',
          isFllow: false
        },
      ],
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
