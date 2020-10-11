import React,{Component} from 'react';
import {Dimensions, Modal, Share,View} from 'react-native';
import {Container, Body, Header, Left, Right, Title,Icon, Content, Button} from 'native-base';
import {WebView} from 'react-native-webview';

const WebViewHeight = Dimensions.get('window').height + 5000;

export default class ModalView extends Component {
  
  constructor(props){
    super(props);

  }

  handleShare = () => {
    const {url,title}=this.props.articleData;
    message=`${title}\n\n Read More @${url}\n\n Shared via News App`;
    return Share.share(
      {title,message,url:message},
      {dialogTitle:`Share ${title}`}
    );
  }

  handleClose = () => {
    this.props.onClose();
  }

  render() {
    const {showModal,articleData} = this.props;
    const {url}=articleData;
    if(url!=undefined){
      return(
        <Modal 
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}
        >
        <Container style={{margin:10,marginBottom:3,backgroundColor:"white"}}>
          <Header style={{backgroundColor:'#539757'}}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                <Icon name="close" style={{color:"white",fontSize:15}} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{color:"white"}} />
            </Body>
            <Right>
            <Button onPress={this.handleShare} transparent>
                <Icon name="share" style={{color:"white",fontSize:20}} />
              </Button>
            </Right>
          </Header>
          <Content contentContainerStyle={{height:WebViewHeight}}>
            <WebView source={{uri:url}} style={{flex:1}} onError={this.handleClose} startInLoadingState scalesPageToFit />
          </Content>
        </Container>
        </Modal>
      )
    } else {
      return null;
    }
  }
}
