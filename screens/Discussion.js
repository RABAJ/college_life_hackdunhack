import React, { Component } from 'react';
import {StyleSheet, style, Image} from 'react-native';
import { Container, Header, Content, Card, Right, CardItem, Text, Body, Left, Icon } from 'native-base';
import {DrawerNavigator} from 'react-navigation'

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#1D6F7E'}}>
          <Left><Icon name="menu" onPress={
            ()=>this.props.navigation.navigate('DrawerOpen')
          } /></Left>
          <Body>
            <Text style={{fontSize:18}}>Dicussion Forum</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={{backgroundColor: '#D2911A' }} >
          <Card>
            <CardItem header>
              <Text style={styles.text} >News Feed 1</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text>
                  Info 1
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>    - Sports</Text>
            </CardItem>
         </Card>
         <Card>
            <CardItem header>
              <Text style={styles.text} >News Feed 3</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text>
                  Info 2
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>    - Event Manager</Text>
            </CardItem>
         </Card>
         <Card>
            <CardItem header>
              <Text style={styles.text} >News Feed 3</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text>
                  Info 3
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>    - TPO</Text>
            </CardItem>
         </Card>
         <Card>
            <CardItem header>
              <Text style={styles.text} >News Feed 4</Text>
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text>
                  Info 4
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>    - Intel</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  header:{
    color:'black',
    fontSize:20,
    backgroundColor:'#F9D046'
  },
  text:{
    color:'green',
    fontSize:20
  },
  drawerimage:{
    height:150,
    width: 150
  },
  body:{
      backgroundColor:'#C2BFC0'
  }
})