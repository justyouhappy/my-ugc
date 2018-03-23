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

export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'Main'
    }
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={styles.container} >
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#fff"
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
                    <Search />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="投稿"
                    onPress={() => {this.props.navigation.navigate('Post')}}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Icon name={ 'ios-add-circle' } size={30} color={'#f54e7a'} />}
                >
                    <MyWrite />
                </TabNavigator.Item> 
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icon name={ 'md-person' } size={30} color={'gray'} />}
                    renderSelectedIcon={() => <Icon name={ 'md-person' } size={30} color={'#555'} />}
                    onPress={() => this.setState({ selectedTab: '我的' })}>
                    <Mine />
                </TabNavigator.Item> 
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'myWrite'}
                    title="我的投稿"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icons name={ 'event-note' } size={30} color={'gray'} />}
                    renderSelectedIcon={() => <Icons name={ 'event-note' } size={30} color={'#555'} />}
                    onPress={() => this.setState({ selectedTab: 'myWrite' })}>
                    <MyWrite />
                </TabNavigator.Item> 
            </TabNavigator>
        </SafeAreaView>
    );
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
