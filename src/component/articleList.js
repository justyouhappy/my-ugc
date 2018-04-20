import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleItem from './articleItem.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }
  _onEndReached() {
    this.props.fetchData();
  }
  render() {
    const {articleList, hasMoreText} = this.props
    const FooterView =
      <View style={styles.footer}>
        <Text>{hasMoreText}</Text>
      </View>;
    return (
      <View style={styles.containner}>
        {!!articleList.length ? <ListView
          dataSource={this.state.dataSource.cloneWithRows(articleList)}
          renderRow={(item) => <ArticleItem detail={item}/>}
          initialListSize={3}
          renderFooter={() => FooterView}
          onEndReachedThreshold={5}
          onEndReached={this._onEndReached.bind(this)}
        /> : <View style={styles.noting}>
        <Text style={{fontSize: 30}}>暂无内容</Text>
      </View>}
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
