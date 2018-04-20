import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { SearchBar, ListItem, Avatar, Button } from 'react-native-elements';
import config from '../lib/config.js';
import fetchData from '../lib/fetchdata.js';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
      }
    }
  static navigationOptions = {
    title: '我的关注'
  };
  cancelFolow(id, i) {
    fetchData(`http://${config.ip}:${config.port}/unFllow`, { method: 'post', data: {
      id,
    }}).then((res) => {
        if(res.status === 0 ) {
          this.setState({
            list: this.state.list.splice(i, 1),
          })
          alert('取消关注成功');
        } else {
          alert('出错了');
        }
    });
  }
  getUserList() {
    fetchData(`http://${config.ip}:${config.port}/getUserFllowList`, { method: 'get' }).then((res) => {
        if(res.status === 0 ) {
          this.setState({
            list: res.data ? res.data.map((e) => {
              return {
                name: e.nickname,
                avatar_url: e.avatar,
                subtitle: e.birthday,
                _id: e._id,
              }
            }) : [],
            string: res.data || '无结果',
          })
        } else if(res.status === 2){
          this.props.navigation.navigate('Sigin');
        }
    });
  }
  componentDidMount() {
    this.getUserList();
  }
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
          this.state.list.length ? this.state.list.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              subtitle={item.subtitle}
              leftIcon={
                <Avatar
                  small
                  rounded
                  title="MT"
                  source={{uri: item.avatar_url + '?imageView2/1/w/250/h/169/interlace/1/q/100'}}
                  containerStyle={{marginRight: 10}}
                />
              }          
              rightIcon={<Button
                onPress={() => {this.cancelFolow(item._id, i)}}
                titleStyle={{ color: '#000',fontSize: 10}}
                buttonStyle={{
                  width: 60,
                  backgroundColor: '#ffd900',
                  borderColor: '#ccc',
                  borderWidth: 1
                }}
                title={ "取消关注"}
              />}
            />
          )) : <Text style={{textAlign: 'center', marginTop: 30, fontSize: 20}}>{this.state.string}</Text>
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
