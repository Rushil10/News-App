import React,{Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import ShowRss from '../components/showRss';
import Modal from '../components/modal';


class Tab5 extends Component{
  constructor(props){
    super(props);
    this.theme=props.theme;
    this.state={
      title:'',
      description:'',
      data:null,
      isLoading:true,
      setModalVisible:false,
      modalArticleData:{}
    }
  }

  handleItemDataonPress = (articleData) => {
    console.log(articleData)
    this.setState({
      setModalVisible:true,
      modalArticleData:articleData
    });
    console.log(this.modalArticleData);
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible:false,
      modalArticleData:{}
    });
  }

  FetchDataFromRssFeed() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        var myObj = JSON.parse(request.responseText);
        for (var i = 0; i < 1; i ++) {
          this.setState({
            title: myObj.items[i].title,
            description: myObj.items[i].description,
            data: myObj.items
          });
        }
      }
    }
    request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms", true);
    request.send();
  }

  componentDidMount() {
    {this.FetchDataFromRssFeed()}
  }

  render(){
    return(
      <Content>
          <List 
          style={{ backgroundColor: this.theme === 'light' ? '#fff' : '#000' }}
          dataArray={this.state.data}
          renderRow={(item) => {
            return(
              <ShowRss theme={this.theme} data ={item} onPress={this.handleItemDataonPress}/>
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

export default Tab5;