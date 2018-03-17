import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Right, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header> 
          <Left>
            <Icon name="menu" onPress={
            ()=>this.props.navigation.navigate('DrawerOpen')
          } />
          </Left>
          <Body>
            <Text style={{fontSize:18}}>News Feeds</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/08_phone-512.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.biznespreneur.com/wp-content/uploads/2017/06/t.jpg'}} style={{height: 200, width: 285, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/08_phone-512.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.biznespreneur.com/wp-content/uploads/2017/06/t.jpg'}} style={{height: 200, width: 285, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/08_phone-512.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.biznespreneur.com/wp-content/uploads/2017/06/t.jpg'}} style={{height: 200, width: 285, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}