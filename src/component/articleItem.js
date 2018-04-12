import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Avatar } from 'react-native-elements';
var Dimensions = require('Dimensions');

export default class Main extends React.Component {
  render() {
    const {detail} = this.props
    return (
      <View  style={styles.container}>
        <View style={styles.header}>
          <View>
            <Avatar
              small
              rounded
              title="MT"
              // height={20}
              source={{uri:detail.avatar_url}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.nack}>{detail.nackName}</Text>
            <Text style={styles.time}>{detail.time}</Text>
          </View>
        </View>
        <Text style={styles.body}>{detail.text}</Text>
        <View style={styles.images}>
          {
            detail.images.map((ele, i) => 
              <Image
                style={{
                  width: (Dimensions.get('window').width - (detail.images.length + 1) * 10) / detail.images.length,
                  height: 150,
                  backgroundColor: '#313131',
                }}
                source={{uri: ele}}
                key={i}
                resizeMode="contain"
                accessible={true}/>
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  images: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    padding: 5,
  },
  headerText: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  time: {
    fontSize: 10,
    color: '#5c5c5c',
  },
  nack: {
    fontSize: 12,
    color: '#000',
  },
  body: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    color: '#000'
  }
});
