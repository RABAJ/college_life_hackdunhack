import React, {Component} from 'react'
import {
    Platform, StyleSheet, Text, View, TextInput, Button, Image
} from 'react-native'
import {Header, Body, Container, Content} from 'native-base'
import {StackNavigator,DrawerNavigator, DrawerItems} from 'react-navigation'
import Welcome from './screens/Welcome'
import Profile from './screens/Profile'
import Select from './screens/Select'
import NewsFeed from './screens/NewsFeed'
import Attendance from './screens/Attendance'
import Data from './screens/Data'

const customDrawer =(props)=>(
    <Container>
      <Header style={{height:100, backgroundColor:'#40617F'}} >
        <Body style={{}} >
          <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1021px-Xbox_Logo.svg.png'}} 
            style={{height: 200, width: null, flex: 1}}
            />
        </Body>
      </Header>
      <Content>
          <DrawerItems {...props}/>
      </Content>
    </Container>
  )
  
const Navigation = DrawerNavigator({
    Welcome :{
        screen:Welcome,
    },
    NewsFeed:{
        screen:NewsFeed,
    },
    Attendance:{
        screen:Attendance,
    },
    Profile:{
        screen:Profile,
    },
    Select:{
        screen:Select,
    },
    Data:{
        screen:Data,
    },
},
{
    contentComponent: customDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggle:'DrawerToggle'
})
export default Navigation;
