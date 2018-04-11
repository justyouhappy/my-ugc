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
          text: 'Amy Farha',
          images:['https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'],
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          nackName: '趁着年轻还为了',
          time: '2017.08.09'
        },
        {
          text: 'Amy Farha',
          images:['https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'],
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          nackName: '趁着年轻还为了',
          time: '2017.08.09'
        },
        {
          text: 'Amy Farha',
          images:['https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg', ,'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'],
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          nackName: '趁着年轻还为了',
          time: '2017.08.09'
        }
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
