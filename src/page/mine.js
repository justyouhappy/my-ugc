import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
import { Avatar, ListItem, } from 'react-native-elements';

var Dimensions = require('Dimensions');
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      avatarUri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
      nackName: '昵称',
      sex: '男',
      birthday: '1995.11.03'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgStyle}
          source = {require('../img/home-bg.jpg')}>
          <Avatar
            large
            rounded
            title="MT"
            source={{uri: this.state.avatarUri}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
            <Text style={styles.nackName}>{this.state.nackName}</Text>
            <Text style={styles.font}>{this.state.sex + ' '+ this.state.birthday}</Text>
        </ImageBackground>
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
  imgStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1900 * 870,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nackName: {
    color:'#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  font: {
    color:'#fff',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  more: {
    marginTop: 60,
    fontSize: 20,
    textAlign: 'center',
  }
});
