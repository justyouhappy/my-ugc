import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarUpdate from '../component/avavterupdate.js';
import Toast from 'react-native-root-toast';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
var Dimensions = require('Dimensions');

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      SPass: '',
      password: '',
      nickName: '',
      sex: '',
      rename: '',
      birthday: ''
    };
  }
  static navigationOptions = {
    title: '注册',
    headerStyle: {

    }
  };
  siginUP() {
   if(this.state.password !== this.state.SPass) {
      Toast.show('两次密码不一致', {
        position: 0,
      });
    } else if (!this.state.username || !this.state.SPass || !this.state.password || !this.state.nickName || !this.state.sex || !this.state.rename || !this.state.birthday) {
      Toast.show('所有项都不能为空哦', {
        position: 0,
      });
    } else {
      fetchData(`http://${config.ip}:${config.port}/siginUp`, { method: 'post', data: {
        username: this.state.username,
        password: this.state.password,
        nickname: this.state.nickName,
        birthday: this.state.birthday,
        rename: this.state.rename,
        sex: this.state.sex
      }}).then((res) => {
          if(res.status === 0 ) {
            this.props.navigation.goBack();
          } else {
            Toast.show(res.msg, {
              position: 0,
            });
          }
      });
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <View style={styles.box}>
          <Text h3 style={{textAlign: 'center', marginBottom: 30}}>欢迎来注册</Text>
          <Input
            containerStyle={{
               width: '100%'
            }}
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            placeholder='输入电话作为用户名'
          />
          <Input
            containerStyle={{
               width: '100%',
               marginTop: 10,
            }}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            placeholder='输入密码'
          />
          <Input
            containerStyle={{
               width: '100%',
               marginTop: 10,
            }}
            value={this.state.SPass}
            onChangeText={(SPass) => this.setState({SPass})}
            secureTextEntry={true}
            placeholder='请再次输入密码'
          />
          <Input
            containerStyle={{
               width: '100%'
            }}
            value={this.state.nickName}
            onChangeText={(nickName) => this.setState({nickName})}
            placeholder='输入昵称'
          />
          <Input
            containerStyle={{
              width: '100%',
              marginTop: 10,
            }}
            value={this.state.rename}
            onChangeText={(rename) => this.setState({rename})}
            placeholder='输入真实姓名'
          />
          <Input
            containerStyle={{
              width: '100%',
              marginTop: 10,
            }}
            value={this.state.sex}
            onChangeText={(sex) => this.setState({sex})}
            placeholder='输入性别'
          />
          <Input
            containerStyle={{
               width: '100%',
              marginTop: 10,
            }}
            value={this.state.birthday}
            onChangeText={(birthday) => this.setState({birthday})}
            placeholder='输入出生日期，如1995.11.03'
          />
          <Button
            title="提交"
            loading={false}
            onPress={this.siginUP.bind(this)}
            titleStyle={{ fontSize: 20, color: '#2c89dc', textAlign: 'center'}}
            clear= {true}
            buttonStyle={{
              width: Dimensions.get('window').width - 20,
              height: 45,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#2c89dc',
            }}
            containerStyle={{ marginTop: 30}}
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
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
