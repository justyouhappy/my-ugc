import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View, Button, TextInput, NativeModules,} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
const ImagePicker = NativeModules.ImageCropPicker;

export default class Post extends React.Component {
  static navigationOptions = {
    title: '投稿',
    headerRight: (
      <TitleRight onClick={() => alert('This is a button!')} title="发表"></TitleRight>
    ),
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex: 1 },
    headerStyle: {
    }
  };
  constructor(props) {
    super(props);
    this.state = { text: '', language: '' };
  }
  // uploadImage() {
  //   ImagePicker.openPicker({
  //     multiple: true,
  //     waitAnimationEnd: false,
  //   });
  // }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
<<<<<<< HEAD
        <Text onPress={() => {
            this.props.navigation.goBack()
        }}>你的第四个app成功了</Text>
=======
        <View style={styles.box}>
          <TextInput
            style={{ height: '50%', borderWidth: 0, fontSize: 20, textAlignVertical: 'top' }}
            placeholder="分享你的原创...."
            multiline={true}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </View>
>>>>>>> 原生rn
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
=======
    backgroundColor: '#eee',
    flex: 1,
  },
  box: {
    height: 300,
    padding: 20,
    backgroundColor: '#fff',
  }
>>>>>>> 原生rn
});
