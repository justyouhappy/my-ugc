import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
export default class Post extends React.Component {
  static navigationOptions = {
    title: '登录',
    headerStyle: {

    }
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  sigin() {
    const { params } = this.props.navigation.state;
    fetchData(`http://${config.ip}:${config.port}/sigin`, { method: 'post', data: {
      username: this.state.username, password: this.state.password,
    }}).then((res) => {
        if(res.status === 0 ) {
          params.changeSigined(true);
          this.props.navigation.goBack();
          params.cb && params.cb();
        } else {
          alert(res.msg);
        }
    });
  }
  signUp() {
    this.props.navigation.navigate('SignUp');

  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <View style={styles.box}>
          <Input
            containerStyle={{
              width: '100%'
            }}
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            placeholder='输入用户名(电话)'
          />
          <Input
            containerStyle={{
              width: '100%'
            }}
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({password})
            }}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
            secureTextEntry={true}
            placeholder='输入密码'
          />
          <Button
            title="登录"
            loading={false}
            textStyle={{ fontWeight: "300" }}
            buttonStyle={{
              width: 300,
              height: 45,
              borderWidth: 0,
              borderRadius: 5
            }}
            containerStyle={{ marginTop: 10 }}
            onPress={this.sigin.bind(this)}
          />
          <Button
            title="注册"
            loading={false}
            textStyle={{ fontWeight: "300", color: '#000'}}
            buttonStyle={{
              width: 300,
              height: 45,
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this.signUp.bind(this)}
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 300,
    height: '50%',
  }
});
