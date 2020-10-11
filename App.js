
import React from 'react';
import { StyleSheet, Text, View,useColorScheme } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RssDetails from './src/screens/components/RssDetails';
import CategoryScreen from './src/screens/newsCategory';
import newsDisplay from './src/screens/newsDisplay';
import searchScreen from './src/screens/searchScreen';
import { AppearanceProvider} from 'react-native-appearance';

const navigator = createStackNavigator({
  Main:MainScreen,
  RssDetails:RssDetails,
  CategoryScreen: CategoryScreen,
  CategoryNews:newsDisplay,
  Search:searchScreen,
},{
  initialRouteName:"Main",
  defaultNavigationOptions:{
    title:"News",
    headerStyle:{
      backgroundColor: "#30839f"
    },
    headerTintColor: "#fff",
  }
})

let Navigation = createAppContainer(navigator)

export default () => {
  let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme="dark" />
    </AppearanceProvider>
  )
}


