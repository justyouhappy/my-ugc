import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ArticleItem from './articleItem.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {articleList, hasMoreText} = this.props
    return (
      <ScrollView 
        style={styles.container}
        horizontal={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {articleList && articleList.map((ele, i) => {
            return <ArticleItem key={i} detail={ele}/>
        })}
        {hasMoreText && <Text style={styles.text}>{hasMoreText}</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd'
  },
  text: {
    textAlign: 'center',
  }
});
