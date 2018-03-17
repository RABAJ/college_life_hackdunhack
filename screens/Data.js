import React,{Component} from 'react'
import {View, Image} from 'react-native'
import {Container, Header, Content, Body, Right, List, ListItem, Text, Left, Icon} from 'native-base'
import axios from 'axios'

export default class Axios extends Component{
    constructor(props) {
        super(props);
        this.state = {cars: [] };
    }
    componentWillMount() {
        axios.get('https://kshtiijsu.github.io/json-files/cars3.json')
        .then(response => this.setState({ cars: response.data }));
        console.log(this.state.cars);
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
            <Text style={{fontSize:18}}>Data</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
          <List dataArray={this.state.cars}
            renderRow={(item) =>
              <ListItem>
                <Text style={{ fontSize: 18, color: 'black'}}>{item.Name} : {item.Company}</Text>
              </ListItem>
            }>
            <View>
            <Image 
            source={{uri:'https://upload.wikimedia.org/wikipedia/en/0/06/ICDC_College_Logo.png'}} /></View>
          </List>
        </Content>
      </Container>
        )
    }
}