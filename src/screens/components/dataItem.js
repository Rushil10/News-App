import React,{Component} from 'react';
import {ListItem,Thumbnail,Left,Body,Text,Right,View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Time from './time';

export default class DataItem extends Component {
  constructor(props){
    super(props);
    this.theme=props.theme;
    this.data=props.data;
  }

  handlePress = () => {
    const{url,title}=this.data;
    this.props.onPress({url,title})
  }
  render(){
    return(
      <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://www.bing.com/images/search?view=detailV2&ccid=%2b%2bzeP83n&id=39473A59FE82E7DFAA301C12075BF90621220828&thid=OIP.--zeP83nD9wYtprpz0KrmAAAAA&mediaurl=https%3a%2f%2fspecials-images.forbesimg.com%2fimageserve%2f5cfea7bb4c687b0008593c0a%2f416x416.jpg%3fbackground%3d000000%26cropX1%3d1554%26cropX2%3d2474%26cropY1%3d240%26cropY2%3d1159&exph=416&expw=416&q=messi&simid=608051954835915796&ck=8AC0F3BD9F72ACF7D83DB06CDB0A5104&selectedIndex=4&FORM=IRPRST&ajaxhist=0' }} />
              </Left>
              <Body>
                <TouchableOpacity onPress={this.handlePress}>
                <Text style={{ color: this.theme === 'light' ? '#000' : '#fff' }} numberOfLines={2}>{this.data.title}</Text>
                </TouchableOpacity>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{flex:1,flexDirection:'row',marginTop:5,marginLeft:8}}>
                  <Time time={this.data.publishedAt} />
                </View>
              </Body>
            </ListItem>
    )
  }
}