import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Button } from 'react-native-elements';
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
              rightIcon={<Button
                onPress={() => {alert(1)}}
                titleStyle={{ color: '#fff',fontSize: 10}}
                buttonStyle={{
                  width: 60,
                  backgroundColor: item.isFllow ? 'red' : 'blue'
                }}
                title={item.isFllow ? "已关注" :"关注"}
              />}
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
