import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, onClick } = this.props;
    return (
      <TouchableOpacity style={styles.container}  onPress={() => {
          onClick();
      }}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },
});
