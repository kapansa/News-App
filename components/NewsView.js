import React from 'react';
import { Text, View, ScrollView, Image, ListView, Alert, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Welcome from  './Welcome';
import AllNews from  './AllNews';

export default class NewsView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      news: [{}],
      check: true
    }
  }

  componentDidMount(){
    var allNews = fetch('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=4959d88cadab4be8b349cad1005e27fb')
    .then( (response) => response.json() )
    .then( responseJson => { this.setState({ news: responseJson.articles, check: false}); } );
  }

  render() {
    if(this.state.check == true){

      return <Welcome />

    }else{

    return(
      <AllNews />
    )
  };
  }
}

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 10,
     backgroundColor: 'grey',
     alignItems: 'center',
  },
  text: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 15
  }
})
