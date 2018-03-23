import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import Search from 'react-native-search-box';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '123'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Search
          ref="searchBox" 
          searchIconCollapsedMargin={70}
          placeholderCollapsedMargin={50}
          placeholder="搜索你想关注的人"
          backgroundColor="#555"
          onSearch={this.search.bind(this)}
          afterDelete={this.afterDelete.bind(this)}
        />
        <ScrollView 
          horizontal={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text>{this.state.string}</Text>
        </ScrollView>
      </View>
    );
  }
  search(str) {
    this.setState({
      string: str + ''
    })
  }
  afterDelete() {
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
});
