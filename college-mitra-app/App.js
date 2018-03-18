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
import Discussion from './screens/Discussion'

const customDrawer =(props)=>(
    <Container>
      <Header style={{height:250, backgroundColor:'#40617F'}} >
        <Body style={{}} >
        <Image source={{uri: 'https://png.icons8.com/ios/1600/user-male-circle-filled.png'}} style= {{ height:200, width: 200, borderRadius:75 }} />
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
    Data:{
        screen:Data,
    },
    Discussion:{
        screen:Discussion,
    }
},
{
    contentComponent: customDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggle:'DrawerToggle'
})
export default Navigation;
