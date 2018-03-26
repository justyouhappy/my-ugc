import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
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
        platform="ios"
        noIcon={true}
        containerStyle={{
          backgroundColor: '#eee',
          borderColor: '#ccc',
          height: 60,
        }}
        inputStyle={{
          backgroundColor: '#fff',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        lightTheme={true}
        placeholder='搜索你想关注的人'
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
    backgroundColor: '#fff',
    flex: 1,
  }
});
