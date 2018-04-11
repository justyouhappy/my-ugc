import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, View, Button, TextInput, Image, TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TitleRight from '../component/titleRight.js';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import fetchData from '../lib/fetchdata.js';

var photoOptions = {
  //底部弹出框选项
  title:'请选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData:false,
  mediaType: 'photo',
  storageOptions: {
      skipBackup: true,
      path:'images'
  }
}
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
    this.state = { text: '', avatarSource: [] };
  }
  uploadImage() {
    ImagePicker.showImagePicker(photoOptions, (response) => {
    
      if (response.didCancel) {
        return;
      }
      else if (response.error) {
        return;
      }
      else if (response.customButton) {
        return
      }
      else {
        // let formData = new FormData();
        // let file = {uri: response.uri, type: 'multipart/form-data', name: 'image.png'}; 
        // formData.append("files",file);
        // fetchData('http://nami.mdzzapp.com/upload/file', { method: 'post', headers:{ 'Content-Type':'multipart/form-data'}, data: formData }).then((res) => {
        //   alert(res.src);
        // }).catch((err) => {
        //   console.log(err.message);
        // });
        let source = { uri: response.uri };
        let avatarSource = this.state.avatarSource;
        avatarSource.push(source);
        this.setState({
          avatarSource,
        });
      }
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <View style={styles.box}>
          <TextInput
            style={{ height: '50%', borderWidth: 0, fontSize: 20, textAlignVertical: 'top' }}
            placeholder="分享你的原创...."
            multiline={true}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <View style={styles.imgBox}>
            {
              this.state.avatarSource.map((ele, i) =>
                <Image
                  style={{width: 100, height: 100, marginRight: 10}}
                  source={{uri: ele.uri}}
                  key={i}
                />)
            }
            {this.state.avatarSource.length === 3 || <TouchableOpacity
              onPress={this.uploadImage.bind(this)}>
              <View style={styles.upload}>
                <Icon name={ 'ios-add' } size={100} color={'#555'} />
              </View>
            </TouchableOpacity>}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  imgBox: {
    flexDirection: 'row',
  },
  box: {
    height: 300,
    padding: 20,
    backgroundColor: '#fff',
  },
  upload: {
    height:100,
    width: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
