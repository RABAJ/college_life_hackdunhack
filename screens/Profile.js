import React, { Component } from 'react';
import {
    Platform, StyleSheet, TextInput, Button
} from 'react-native';
import { Container, Header, Content, Thumbnail, Text, View, Left, Icon } from 'native-base';

export default class ThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#1D6F7E'}}>
          <Left><Icon name="menu" onPress={
            ()=>this.props.navigation.navigate('DrawerOpen')
          } /></Left>
          <Body>
            <Text style={{fontSize:18}}>Profile</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        <View style={styles.container}>         
          <Thumbnail style={styles.imgStyle} large source={{uri: 'https://tinyurl.com/ycjf97oy'}} />
        </View>
        <View style={styles.container2}>         
        <Text style={styles.text}>User Name</Text>       
        <Text style={styles.text}>Phone no: xxxxxx6745</Text>
        </View>
        <View style={styles.container3}>         
        <Text style={styles.text}>Address:</Text>        
        <Text style={styles.text}>Blood Group:</Text>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808484',
        alignItems:'center'
    },
    container2: {
      alignItems: 'center',
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
    },
    container3: {
      alignItems: 'center',
      backgroundColor: '#40617F',
      flex: 1,
      justifyContent: 'center',
    },
    header:{
      color:'black',
      fontSize:25,
      marginTop:10
  },
    text:{
        color:'white',
        fontSize:25
    },
    imgStyle:{
      marginTop:10,
      marginBottom:10,    
      paddingRight: 10,
      paddingLeft: 10 
    }
});