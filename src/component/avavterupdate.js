import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
var Dimensions = require('Dimensions');
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality: 0.4,
    allowsEditing: true,
    noData:false,
    mediaType: 'photo',
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
export default class Main extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        info: {
            avatarUri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
            nickName: '昵称',
            sex: '男',
            birthday: '1995.11.03'
        },
    };
  }
  uploadAvatarImage() {
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
        let formData = new FormData();
        let file = {uri: response.uri, type: 'multipart/form-data', name: 'image.png'}; 
        formData.append("files",file);
        fetchData('http://nami.mdzzapp.com/upload/file', { method: 'post', headers:{ 'Content-Type':'multipart/form-data'}, data: formData, type: 'form' }).then((res) => {
          fetchData(`http://${config.ip}:${config.port}/updatedUser`, { method: 'post', data: { avatar: res.src }})
          .then(res => {
            if(res.status === 0) {
              this.setState({
                info: {
                  ...this.state.info,
                  avatarUri: res.data.user.avatar,
                }
              })
            } else {
              alert('更改失败');
            }
          });
        }).catch((err) => {
          alert(err.message);
        });
      }
    });
  }
  uploadBgImage() {
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
        let formData = new FormData();
        let file = {uri: response.uri, type: 'multipart/form-data', name: 'image.png'}; 
        formData.append("files",file);
        fetchData('http://nami.mdzzapp.com/upload/file', { method: 'post', headers:{ 'Content-Type':'multipart/form-data'}, data: formData, type: 'form' }).then((res) => {
          fetchData(`http://${config.ip}:${config.port}/updatedUser`, { method: 'post', data: { bg: res.src }}).then(res => {
            if(res.status === 0) {
              this.setState({
                info: {
                  ...this.state.info,
                  bg: res.data.user.bg,
                }
              })
            } else {
              alert('更改失败');
            }
          });
        }).catch((err) => {
          alert(err.message);
        });
      }
    });
  }
  componentWillMount() {
      this.setState({
          info: this.props.info
      })
  }
  componentWillReceiveProps(props) {
    this.setState({
        info: props.info
    })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.uploadBgImage.bind(this)}>
        <ImageBackground
          style={styles.imgStyle}
          source = {{uri: this.state.info.bg + '?imageView2/1/w/250/h/169/interlace/1/q/100'}}
          >
          <Avatar
            large
            rounded
            title="MT"
            source={{uri: this.state.info.avatarUri + '?imageView2/1/w/250/h/169/interlace/1/q/100'}}
            onPress={this.uploadAvatarImage.bind(this)}
            activeOpacity={0.7}
          />
            <Text style={styles.nickName}>{this.state.info.nickName}</Text>
            <Text style={styles.font}>{this.state.info.sex + ' '+ this.state.info.birthday}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    imgStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 1900 * 870,
        justifyContent: 'center',
        alignItems: 'center',
      },
      nickName: {
        color:'#fff',
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
      },
      font: {
        color:'#fff',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
      },
});
