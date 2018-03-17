import React,{Component} from 'react'
import {View, Image} from 'react-native'
import {Container, Header, Content, List, Body, Right, ListItem, Text, Left, Icon} from 'native-base'
import axios from 'axios'

export default class Axios extends Component{
    constructor(props) {
        super(props);
        this.state = {example: [] };
    }
    componentWillMount() {
        axios.get('https://kshtiijsu.github.io/json-files/cars3.json')
        .then(response => this.setState({ example: response.data }));
        console.log(this.state.example);
  }
    render() {
        return(
        <Container>
        <Header style={{backgroundColor:'#1D6F7E'}}>
          <Left><Icon name="menu" onPress={
              ()=>this.props.navigation.navigate('DrawerOpen')
            } />
          </Left>
          <Body>
            <Text style={{fontSize:18}}>Attendance</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        <Image source={{uri: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'}} style= {{ height:50, width: 50 }} />
          <List dataArray={this.state.example}
            renderRow={(item) =>
              <ListItem>
                <Text style={{ fontSize: 18, color: 'black'}}>{item.Name} : {item.Company}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
        )
    }
}