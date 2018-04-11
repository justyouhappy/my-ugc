import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          subtitle: 'Vice Chairman'
        },
      ],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          platform="android"
          showLoading={false}
          icon={{ type: 'font-awesome', name: 'search',}}
          placeholder='搜索你想关注的人'
          inputStyle={{
            marginLeft: 8
          }}
          onSubmitEditing={this.search.bind(this)}
        />
        <ScrollView
          horizontal={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
        {
          this.state.list.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              subtitle={item.subtitle}
              // rightIcon={{name:''}}
              avatar={{ source: { uri: item.avatar_url } }}
            />
          ))
        }
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
    flex: 1,
  }
});
