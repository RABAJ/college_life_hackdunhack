import React,{Component} from 'react'
import {View} from 'react-native'
import {Container, Header, Content, List, ListItem, Text} from 'native-base'
import axios from 'axios'

export default class Axios extends Component{
    constructor(props) {
        super(props);
        this.state = {example: [{releaseYear: '2018', title: 'absbc'}] };
    }
    componentWillMount() {
        axios.get('https://kshtiijsu.github.io/json-files/cars1.json')
        .then(response => this.setState({ example: response.data }));
        console.log(this.state.example);
  }
    render() {
        return(
        <Container>
        <Header />
        <Content>
          <List dataArray={this.state.example}
            renderRow={(item) =>
              <ListItem>
                <Text style={{ fontSize: 18, color: 'black'}}>{item.Name}:{item.Company}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
        )
    }
}