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
  gotoSigin() {
    this.props.openSigin();
  }
  changeR() {
    alert('关注')
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
          style={{borderTopWidth: 0.5}}
        >
        {
          this.state.list.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              subtitle={item.subtitle}
              leftIcon={
                <Avatar
                  small
                  rounded
                  title="MT"
                  source={{uri: item.avatar_url}}
                  containerStyle={{marginRight: 10}}
                />
              }          
              rightIcon={<Button
                onPress={() => {!this.props.isSigined ? this.gotoSigin() : this.changeR()}}
                titleStyle={{ color: '#000',fontSize: 10}}
                buttonStyle={{
                  width: 60,
                  backgroundColor: item.isFllow && this.props.isSigined ? '#ffd900' : '#fff',
                  borderColor: '#ccc',
                  borderWidth: 1
                }}
                title={item.isFllow && this.props.isSigined ? "已关注" :"关注"}
              />}
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
    backgroundColor: '#fff',
  }
});
