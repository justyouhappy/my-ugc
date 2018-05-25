import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleList from '../component/articleList.js';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      hasMore: true,
      hasMoreText: '加载更多...',
    }
  }
  render() {
    return (
      <ArticleList articleList={this.state.list} isSigin={this.props.screenProps.isSigined} hasMoreText={this.state.hasMoreText} gotoSigin={this.props.screenProps.gotoSigin} fetchData={(i, cb) => {
        this.fetchDatas(i || this.page, cb);
      }}/>
    );
  }
  fetchDatas(page, cb) {
    if(!this.state.hasMore && page !== 1) {
      return;
    }
    this.setState({
      hasMoreText: '正在加载...',
    })
    fetchData(`http://${config.ip}:${config.port}/getMyFloowArticle`, { method: 'post', data: {
      page
    }}).then((res) => {
        cb && cb();
        if(res.status === 0 ) {
          this.setState({
            list: res.data.Items,
            page: this.state.page++,
            hasMore: res.data.hasMore,
            hasMoreText: res.data.hasMore ? '加载更多...' : '没有了'
          })
        } else {
          alert(res.msg);
        }
    });
  }
  componentDidMount() {
    this.fetchDatas(1); 
  }
  componentWillReceiveProps(props) {
    this.setState({
      page: 1,
      hasMore: true,
      hasMoreText: '加载更多...'
    }, () => {props.isselecte && this.fetchDatas(1);});
  }
}

const styles = StyleSheet.create({
});
