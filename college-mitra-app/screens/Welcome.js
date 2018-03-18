import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, Image, View, TextInput,
    CheckBox, TouchableOpacity, ActivityIndicator, Dimensions,
    Modal, Animated
} from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        header:null
    }
    componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('NewsFeed');
        },2000) 
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'}} style={styles.imgStyle}/>             
                <Text style={styles.text}>College Mitra</Text>
            </View> 
        );
    }
} 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        color:'#2BD523',
        fontSize:50
    },
    imgStyle:{
        marginBottom:10,
        height: 300, width: 300,     
        paddingRight: 10,
        paddingLeft: 10 
      }
});