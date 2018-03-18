import React, {Component} from 'react';
import {
    Platform , StyleSheet, Text, View, Image, Alert,
    TextInput, Checkbox, TouchableOpacity, ScrollView
} from 'react-native';
import {Container, Header, Left, Icon} from 'native-base';

export default class Home extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <Container>
            <Header style={{backgroundColor:'#1D6F7E'}}>
          <Left><Icon name="menu" onPress={
            ()=>this.props.navigation.navigate('DrawerOpen')
          } /></Left>
        </Header>
            <View style={styles.container}>
             <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png'}} style={styles.imgStyle}/> 
             <Text style={{marginBottom:10, fontSize: 40, height: 50, textAlign:'center', color: 'white' }}>ICDC College</Text>
              <TouchableOpacity
              onPress={() => {
                Alert.alert('You are a Teacher!!');
              }}>
                <Text style={styles.btnText} >Teacher</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                Alert.alert('You are a Student!!');
              }}>
                <Text style={styles.btnText} >Student</Text>
              </TouchableOpacity>
            </View>
            </Container>
        );
    }
}


var styles = StyleSheet.create({
    container : {
        backgroundColor:'#E6BA0E',
        height: 200,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingRight: 10,
        paddingLeft: 10
    },
    btnText:{
      backgroundColor:'#31B9D5',
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 20,
      width:300,
      height:50,
      textAlign: 'center'      
    },
    imgStyle:{
      marginBottom:20,
      height: 200, width: 200,     
      paddingRight: 10,
      paddingLeft: 10 
    }
})