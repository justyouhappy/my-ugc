import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
import { Avatar, ListItem, } from 'react-native-elements';
import AvatarUpdate from '../component/avavterupdate.js';
var Dimensions = require('Dimensions');
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AvatarUpdate info={this.state.info}/>
        <ListItem
          title="我的关注"
          onPress={() => {
            this.props.openPage('Fllow');
          }}
        />
        <ListItem
          onPress={() => {this.loginOut();}}
          title="退出登录"
        />
        <Text style={styles.more}>更多功能敬请期待</Text>
      </View>
    );
  }
  getUserInfo() {
    fetchData(`http://${config.ip}:${config.port}/getUserInfo`).then((res) => {
      if(res.status === 0) {
        this.setState({
          info: {
            avatarUri: res.data.avatar,
            nickName: res.data.nickname,
            sex: res.data.sex,
            birthday: res.data.birthday,
            bg: res.data.bg,
          },
        })
      }
    })
  }
  loginOut() {
    fetchData(`http://${config.ip}:${config.port}/loginOut`).then((res) => {
      if(res.status === 0) {
        this.props.changeSigined(false);
      }
    })
  }
  componentWillReceiveProps(props) {
    if (props.isSigined) {
      this.getUserInfo();
    }
  }
  componentDidMount() {
    if (this.props.isSigined) {
      this.getUserInfo();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },  
  more: {
    marginTop: 60,
    fontSize: 20,
    textAlign: 'center',
  }
});
