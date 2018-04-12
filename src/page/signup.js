import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarUpdate from '../component/avavterupdate.js';
var Dimensions = require('Dimensions');

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        avatarUri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
        nackName: '昵称',
        sex: '男',
        birthday: '1995.11.03',
        bg: 'http://www.yuhuajian.com/img/home-bg.jpg'
      },
    };
  }
  static navigationOptions = {
    title: '注册',
    headerStyle: {

    }
  };
  sigin() {
    const { params } = this.props.navigation.state;
    params.changeSigined(true);
    this.props.navigation.goBack();
    params.cb();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <AvatarUpdate info={this.state.info}/>
        <View style={styles.box}>
          <Input
            containerStyle={{
               width: '100%'
            }}
            placeholder='输入电话作为用户名'
          />
          <Input
            containerStyle={{
               width: '100%',
               marginTop: 10,
            }}
            secureTextEntry={true}
            placeholder='输入密码'
          />
          <Input
            containerStyle={{
              width: '100%',
              marginTop: 10,
            }}
            placeholder='输入姓名'
          />
          <Input
            containerStyle={{
              width: '100%',
              marginTop: 10,
            }}
            placeholder='输入性别'
          />
          <Input
            containerStyle={{
               width: '100%',
              marginTop: 10,
            }}
            placeholder='输入出生日期，如1995.11.03'
          />
          <Button
            title="提交"
            loading={false}
            titleStyle={{ fontSize: 20, color: '#2c89dc', textAlign: 'center'}}
            clear= {true}
            buttonStyle={{
              width: Dimensions.get('window').width - 20,
              height: 45,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#2c89dc',
            }}
            containerStyle={{ marginTop: 10}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  box: {
    height: '50%',
    padding: 10,
  }
});
