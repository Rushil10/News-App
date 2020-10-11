import React,{Component,useState} from 'react';
import {Text,View,StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Tab, Tabs, Button } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import {useTheme} from 'react-navigation';
//import Tab3 from './tabs/tab3';
//import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import {Feather} from '@expo/vector-icons';
import {SearchBar} from 'react-native-elements';
import Switch from 'react-native-dark-mode-switch';
//import Switch from 'react-native';

const MainScreen = ({navigation}) => {
  let theme=useTheme();
  const [search,setSearch]=useState('');
  const [value,setValue]=useState('');

  return(
    <Container>
    <View>
    <View>
    <SearchBar placeholder="Search" round cancelIcon onChangeText={(search) => {setSearch(search)}} value={search} onEndEditing={() => {navigation.navigate('Search',{searchText:search})}}/>
    {//<Button dark style={{width:65,height:65}}><Text style={{color:"white"}}>     {theme}</Text></Button>
    }
    </View>
    </View>
        <Tabs>
          <Tab heading="General">
            <Tab1 theme={theme} />
          </Tab>
          <Tab heading="Sports">
            <Tab2 theme={theme}/>
          </Tab>
          <Tab heading="RSS">
            <Tab5 theme={theme} />
          </Tab>
        </Tabs>
        
    </Container>

  )
};


MainScreen.navigationOptions = ({navigation}) => {
  return{
    headerRight:
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
    <Feather name="filter" size={30} style={{marginRight:15}} />
    </TouchableOpacity>
    </View>
  };
}

export default MainScreen;