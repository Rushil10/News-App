import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const RssDetails=({navigation}) => {
  const data=navigation.getParam('data');
  return(
    <View>
      <Text>{data.title}</Text>
      <Text>{data.description}</Text>
    </View>
  )
}

export default RssDetails;