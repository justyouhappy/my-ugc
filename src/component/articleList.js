import React from 'react';
import { StyleSheet, Text, View, ListView, RefreshControl} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleItem from './articleItem.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      refreshing: false,
    };
  }
  _onEndReached() {
    this.props.fetchData();
  }
  _onRefresh() {
    const self = this;
    this.setState({
      refreshing: true,
    }, this.props.fetchData(1, () => {
      this.setState({refreshing: false});
    }));
  }
  onClick() {
    this.props.isSigin && this.props.fetchData(1);
    !this.props.isSigin && this.props.gotoSigin && this.props.gotoSigin(() => this.props.fetchData(1));
  }
  render() {
    const {articleList, hasMoreText} = this.props
    const FooterView =
      <View style={styles.footer}>
        <Text>{hasMoreText}</Text>
      </View>;
    return (
      <View style={styles.containner}>
        {!!articleList.length && this.props.isSigin  && <ListView
          dataSource={this.state.dataSource.cloneWithRows(articleList)}
          renderRow={(item) => <ArticleItem detail={item}/>}
          initialListSize={3}
          renderFooter={() => FooterView}
          onEndReachedThreshold={5}
          onEndReached={this._onEndReached.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
        }
        {
          (!articleList.length || !this.props.isSigin) && <View style={styles.noting}>
           <Text onPress={() => {this.onClick()}}style={{fontSize: 15,color: 'red'}}>{this.props.isSigin ? '暂无内容,点击刷新' : '还未登录点击登录'}</Text>
         </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
  },
  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noting: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
