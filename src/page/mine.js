import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import fetchData from '../lib/fetchdata.js';
import config from '../lib/config.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.obj.map((e, i) => {
            return <View key={i}>
              <Text>{e[1]}</Text>
              <Text>{e[2]}</Text>
            </View>;
          })
        }
      </View>
    );
  }
  componentWillReceiveProps(props) {
    if (props.isSigined) {
      fetchData(`http://${config.ip}:3000/`).then((res) => {
        this.setState({
          obj: res,
        })
      }).catch((res) => {
        alert(res.message);
      })
    }
  }
  componentDidMount() {
    if (this.props.isSigined) {
      fetchData(`http://${config.ip}:3000/`).then((res) => {
        this.setState({
          obj: res,
        })
      }).catch((res) => {
        // alert(res.message);
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
