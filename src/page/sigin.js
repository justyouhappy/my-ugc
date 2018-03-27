import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Post extends React.Component {
  static navigationOptions = {
    title: '登录',
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
        <View style={styles.box}>
          <Input
            containerStyle={{
              width: '100%'
            }}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            placeholder='输入用户名'
          />
          <Input
            containerStyle={{
              width: '100%'
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
