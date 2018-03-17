import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View, TextInput, Button
} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import Splash from './screens/Splash';
import Main from './screens/Main'
import Login from './screens/login'

const Navigation = DrawerNavigator({
    Home :{
        screen:Splash,
    },
    Main:{
        screen:Main,
    },
    Login:{
      screen:Login,
  }
})
export default Navigation;