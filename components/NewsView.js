import React from 'react';
import { Text, View, ScrollView, Image, ListView, Alert, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class NewsView extends React.Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { 
      news: [{}]
    }
  }

  componentDidMount(){
    var allNews = fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4959d88cadab4be8b349cad1005e27fb')
    .then( (response) => response.json() )
    .then( responseJson => { this.setState({ news: responseJson.articles }); } );
  }

  render() {
    return(
      <View style={{paddingBottom: 80}}> 
        <ScrollView>
            {
               this.state.news.map((item) => (
                  <View 
                    style = {styles.container} 
                    > 
                     <Text style = {styles.text}>
                        {item.title}
                     </Text>
                     <Image source={{uri: item.urlToImage }} style={{width: 270, height: 190, marginBottom: 10 ,marginTop: 5}} />
                    <Button onPress = {() => Alert.alert(
                    'NEWS DETAILS',
                    item.description,
                    [{text: 'Ok'}]
                    )} title="View More Details" 
                    />
                  </View>
               ))
            }
            </ScrollView>
         </View>
    );
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
