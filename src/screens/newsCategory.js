import React,{Component,useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Container,ListItem, List } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { category } from './config/rest_config';
import { useTheme } from 'react-navigation';

const CategoryScreen= ({navigation}) => {
  let theme=useTheme();
  //const theme=navigation.getParam('theme');
  //console.log(theme);
  const [categories,setCategories]=useState([
    {
      title:"sports",
      id:0
    },
    {
      title:"technology",
      id:1
    },
    {
      title:"business",
      id:2
    },
    {
      title:"entertainment",
      id:3,
    },
    {
      title:"science",
      id:4,
    },
    {
      title:"health",
      id:5,
    }
  ]);
  return (
    <View style={{backgroundColor: theme === 'light' ? '#fff' : '#000'}}>
        <FlatList
         keyExtractor={(item) => item.id}
         data={categories}
         renderItem= {({item}) => (
           <TouchableOpacity onPress={() => navigation.navigate('CategoryNews',{category:item.title, theme:theme})}>
              <Text style={{color: theme === 'light' ? '#000' : '#fff',fontSize:18,marginLeft:20,marginTop:15,borderBottomColor:'lightgray',borderBottomWidth:1,lineHeight:35,}}>{item.title}</Text>
           </TouchableOpacity>
         )}
         />
    
    </View>
  )
}

const styles = StyleSheet.create({
  category:{
    fontSize:18,
    marginLeft:20,
    marginTop:15,
    borderBottomColor:'lightgray',
    borderBottomWidth:1,
    lineHeight:35,
  }
})

export default CategoryScreen;
