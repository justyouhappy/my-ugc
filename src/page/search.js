import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Button } from 'react-native-elements';
import fetchData from '../lib/fetchdata.js';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';
import config from '../lib/config.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
      ],
      string: '开始搜索吧',
    }
  }
  gotoSigin() {
    this.props.openSigin();
  }
  changeR(id, isFllow, i) {
    if(isFllow) {
      this.cancelFolow(id, i);
    } else {
      this.folow(id, i);
    }
  }
  folow(id, i) {
    fetchData(`http://${config.ip}:${config.port}/fllow`, { method: 'post', data: {
      id,
    }}).then((res) => {
        if(res.status === 0 ) {
          this.state.list[i].isFllow = true
          this.setState({
            list: this.state.list,
          })
          alert('关注成功');
        } else if(res.status === 2){
          this.gotoSigin();
        } else {
          alert('出错了');
        }
    });
  }
  cancelFolow(id, i) {
    fetchData(`http://${config.ip}:${config.port}/unFllow`, { method: 'post', data: {
      id,
    }}).then((res) => {
        if(res.status === 0 ) {
          this.state.list[i].isFllow = false;
          this.setState({
            list: this.state.list,
          })
          alert('取消关注成功');
        } else if(res.status === 2){
          this.gotoSigin();
        } else {
          alert('出错了');
        }
    });
  }
  componentWillReceiveProps(props) {
    // if(props.isSigined !== this.props.isSigined || !props.isselecte) {
      this.setState({
        list: [],
        string: '开始搜索吧'
      });
      this.searchs.clear();
    // }
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          platform="android"
          ref={search => this.searchs = search}
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
                  source={{uri: item.avatar_url}}
                  containerStyle={{marginRight: 10}}
                />
              }          
              rightIcon={<Button
                onPress={() => {!this.props.isSigined ? this.gotoSigin() : this.changeR(item._id, item.isFllow, i)}}
                titleStyle={{ color: '#000',fontSize: 10}}
                buttonStyle={{
                  width: 60,
                  backgroundColor: item.isFllow && this.props.isSigined ? '#ffd900' : '#fff',
                  borderColor: '#ccc',
                  borderWidth: 1
                }}
                title={item.isFllow && this.props.isSigined ? "取消关注" :"关注"}
              />}
            />
          )) : <Text style={{textAlign: 'center', marginTop: 30, fontSize: 20}}>{this.state.string}</Text>
        }
        </ScrollView>
      </View>
    );
  }
  search(event) {
    fetchData(`http://${config.ip}:${config.port}/searchUser`, { method: 'post', data: {
      value: event.nativeEvent.text,
    }}).then((res) => {
        if(res.status === 0 ) {
          this.setState({
            list: res.data ? res.data.map((e) => {
              return {
                name: e.nickname,
                avatar_url: e.avatar,
                subtitle: e.birthday,
                _id: e._id,
                isFllow: e.isFllow
              }
            }) : [],
            string: res.data || '无结果',
          })
        } else {
          alert(res.msg);
        }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
