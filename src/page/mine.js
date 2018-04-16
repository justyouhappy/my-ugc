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
        avatarUri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
        nickName: '昵称',
        sex: '男',
        birthday: '1995.11.03',
        bg: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
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
          onPress={() => {this.props.changeSigined(false);}}
          title="退出登录"
        />
        <Text style={styles.more}>更多功能敬请期待</Text>
      </View>
    );
  }
  componentWillReceiveProps(props) {
    if (props.isSigined) {
      // fetchData(`http://${config.ip}:3000/`).then((res) => {
      //   this.setState({
      //     obj: res,
      //   })
      // }).catch((res) => {
      //   alert(res.message);
      // })
    }
  }
  componentDidMount() {
    // if (this.props.isSigined) {
    //   fetchData(`http://${config.ip}:3000/`).then((res) => {
    //     this.setState({
    //       obj: res,
    //     })
    //   }).catch((res) => {
    //     // alert(res.message);
    //   })
    // }
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
