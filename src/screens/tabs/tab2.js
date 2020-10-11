
import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import {getArticles} from '../service/news';
import DataItem from '../components/dataItem';
import Modal from '../components/modal';

class Tab2 extends Component {

  constructor(props) {
    super(props);
    this.theme=props.theme;
    this.state={
      isLoading:true,
      data:null,
      setModalVisible:false,
      modalArticleData:{},
    }
  }

  handleItemDataonPress = (articleData) => {
    this.setState({
      setModalVisible:true,
      modalArticleData:articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible:false,
      modalArticleData:{}
    });
  }

  componentDidMount() {
    getArticles('sports').then(data => {
      this.setState({
        isLoading:false,
        data:data
      })
    },error => {
      Alert.alert('Error','Something went wrong!');
    })
  }
  render(){
    console.log(this.state.data);
    return(
      
        <Content>
          <List 
          style={{ backgroundColor: this.theme === 'light' ? '#fff' : '#000' }}
          dataArray={this.state.data}
          renderRow={(item) => {
            return(
              <DataItem theme={this.theme} data ={item} onPress={this.handleItemDataonPress}/>
            )
          }} />
          <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
          />
        </Content>
      
    )
  }
}

const styles=StyleSheet.create({

})

export default Tab2;