import React from 'react';
import { Text, View, TextInput, Image, Alert, ScrollView  } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={{flex: 1}}>
          <View style={{ backgroundColor: 'grey', height: 70, flexDirection: 'row'}}>

          <View style={{paddingTop: 20, paddingRight: 10, paddingLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>KAPS.COM</Text>
          </View>
          
          <View style={{paddingTop: 10}}>
            <TextInput 
             underlineColorAndroid="transparent"
             type="text" placeholder="Search for local news" 
             style={{backgroundColor: 'white',  borderRadius: 10, paddingLeft: 13, width:200}}
             />
             </View>

          </View>

          <ScrollView>

              <View>
              <Card
                  image={require('./img/one1.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    The late President Sata greeting the Current President Mr Edigar Lungu during the campaign.
                  </Text>
              </Card>
              </View>

              <View>
              <Card
                  image={require('./img/one2.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    A lusaka citizen was caught in the towns of lusaka throwing later and the force immediatly arrested him.
                  </Text>
              </Card>
              </View>

              <View>
              <Card
                  image={require('./img/one3.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    People of lusaka city started fire in the streets due to the issue of government banning them from the city market.
                  </Text>
              </Card>
              </View>

              <View>
              <Card
                  image={require('./img/one.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    CEO and Co-founder Mark Zackerberg was in court due to the current issue of privacy data being lost by facebook.
                  </Text>
              </Card>
              </View>

          </ScrollView>

        </View>
    );
  }
}