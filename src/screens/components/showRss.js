import React,{Component} from 'react';
import {ListItem,Thumbnail,Left,Body,Text,Right,View} from 'native-base';
import {TouchableOpacity} from 'react-native';

class ShowRss extends Component {
  constructor(props){
    super(props);
    this.theme=props.theme;
    this.data=props.data
  }

  handlePress = () => {
    const{title}=this.data;
    const url=this.data.link;
    this.props.onPress({url,title})
    console.log(url);
  }

  render(){
    return(
      <ListItem>
      <Body>
      <TouchableOpacity onPress={this.handlePress}>
      <Text numberOfLines={2} style={{ color: this.theme === 'light' ? '#000' : '#fff' }}>{this.data.title}</Text>
      </TouchableOpacity>
      <Text note numberOfLines={2}>{this.data.description}</Text>
      </Body>
    </ListItem>
    )
  }

}

export default ShowRss;