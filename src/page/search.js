import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import { SearchBar } from 'react-native-elements';

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
        <SearchBar
          platform="android"
          showLoading={false}
          // icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='搜索你想关注的人'
          round={true}
          onSubmitEditing={this.search.bind(this)}
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
  search(event) {
    this.setState({
      string: event.nativeEvent.text,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfcfcf',
    flex: 1,
  }
});
