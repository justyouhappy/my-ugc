import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { SearchBar, ListItem, Avatar, Button } from 'react-native-elements';

export default class Post extends React.Component {
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
  static navigationOptions = {
    title: '我的关注'
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
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
              leftIcon={
                <Avatar
                  small
                  rounded
                  title="MT"
                  source={{uri: item.avatar_url}}
                  containerStyle={{marginRight: 10}}
                />
              }          
              rightIcon={ <Button
                onPress={() => {alert(1)}}
                titleStyle={{ color: '#000',fontSize: 10}}
                buttonStyle={{
                  width: 60,
                  backgroundColor: item.isFllow ? '#ffd900' : '#fcfcfc',
                  borderColor: '#ccc',
                  borderWidth: 1
                }}
                title={item.isFllow ? "已关注" :"关注"}
              />}
            />
          ))
        }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
