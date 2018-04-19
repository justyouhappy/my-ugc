import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Main from './main.js';
import Mine from './mine.js';
import Search from './search.js';
import MyWrite from './myWrite.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from 'react-navigation';
import StatusBar from '../component/statusBar.js'
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'Main',
      isSigined: false,
    }
    this.changeSigined = this.changeSigined.bind(this);
  }
  static navigationOptions = {
    header: null
  };
  openPost() {
    // alert(this.props.navigation.state.params.isSigined)
    if(this.state.isSigined) {
      this.props.navigation.navigate('Post');
    } else {
      this.openSigin(() => {this.props.navigation.navigate('Post');});
    }
  }
  openSigin(cb) {
    this.props.navigation.navigate('Sigin', {changeSigined: this.changeSigined, cb});
  }
  openPage(page) {
    this.props.navigation.navigate(page);
  }
  openMain() {
    if(!this.state.isSigined) {
      this.openSigin(() => {this.setState({ selectedTab: '我的' });});
    } else {
      this.setState({ selectedTab: '我的' });
    }
  }
  changeSigined(isSigined) {
    if(!isSigined) {
      this.setState({ selectedTab: 'Main' });
    }
    this.setState({
      isSigined,
    })
  }
  openmyWrite() {
    if(!this.state.isSigined) {
      this.openSigin(() => {this.setState({ selectedTab: 'myWrite' });});
    } else {
      this.setState({ selectedTab: 'myWrite' });
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container} >
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#ecf0f1"
            />
            <TabNavigator
              tabBarStyle={styles.bar}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Main'}
                    title="主页"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'#a2a2a2'} />}
                    renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#555'} />}
                    onPress={() => this.setState({ selectedTab: 'Main' })}>
                    <Main/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Search'}
                    title="搜索"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icon name={ 'ios-search' } size={30} color={'#a2a2a2'} />}
                    renderSelectedIcon={() => <Icon name={ 'ios-search' } size={30} color={'#555'} />}
                    onPress={() => this.setState({ selectedTab: 'Search' })}>
                    <Search isselecte={this.state.selectedTab === 'Search'} isSigined={this.state.isSigined} openSigin={this.openSigin.bind(this)}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="投稿"
                    onPress={this.openPost.bind(this)}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Icon name={ 'ios-add-circle' } size={30} color={'#f54e7a'} />}
                >
                </TabNavigator.Item> 
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icon name={ 'md-person' } size={30} color={'gray'} />}
                    renderSelectedIcon={() => <Icon name={ 'md-person' } size={30} color={'#555'} />}
                    onPress={this.openMain.bind(this)}>
                    <Mine openPage={this.openPage.bind(this)} isSigined={this.state.isSigined} changeSigined={this.changeSigined.bind(this)}/>
                </TabNavigator.Item> 
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'myWrite'}
                    title="我的投稿"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icons name={ 'event-note' } size={30} color={'gray'} />}
                    renderSelectedIcon={() => <Icons name={ 'event-note' } size={30} color={'#555'} />}
                    onPress={this.openmyWrite.bind(this)}>
                    <MyWrite isSigined={this.state.isSigined} isselecte={this.state.selectedTab === 'myWrite'}/>
                </TabNavigator.Item> 
            </TabNavigator>
        </SafeAreaView>
    );
  }
  componentDidMount() {
    fetchData(`http://${config.ip}:${config.port}/`).then((res) => {
      if(res.msg === '未登录' ) {
        this.setState({
          isSigined: false,
        })
      } else {
        this.setState({
          isSigined: true,
        })
      }
    })
      
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  tabText:{
    color:'#000000',
    fontSize:10
  },
  selectedTabText:{
    color:'#D81E06'
  },
  bar: {
    justifyContent: 'flex-end',
  }
})
