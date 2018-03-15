import React from 'react';
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Main from './src/page/main.js';
import Mine from './src/page/mine.js';
import Search from './src/page/search.js';
import Write from './src/page/write.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'Main'
    }
  }
  render() {
    return (
      <View style={styles.container} >
            <StatusBar  
              animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
              hidden={false}  //是否隐藏状态栏。  
              translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
              barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
              > 
            </StatusBar>
            <View style={styles.topBar}></View>
            <TabNavigator>
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
                    selected={this.state.selectedTab === 'add'}
                    title="创作"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Icon name={ 'ios-brush-outline' } size={30} color={'gray'} />}
                    renderSelectedIcon={() => <Icon name={ 'ios-brush' } size={30} color={'#555'} />}
                    onPress={() => this.setState({ selectedTab: 'add' })}>
                    <Write />
                </TabNavigator.Item> 
            </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#fff',
  },
  topBar: {
    height: 22,
    backgroundColor: '#555'
  },
  tabText:{
    color:'#000000',
    fontSize:10
  },
  selectedTabText:{
    color:'#D81E06'
  },
  icon:{
    width:20,
    height:20
  }
})
