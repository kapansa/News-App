import React from 'react';
import {  Text, View, TextInput, Image, Alert, ScrollView  } from 'react-native';

export default class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      search: '',
    }
  }

  handlesubmit(){
    alert('this is what you searched for:');
  }

    render() {
      return (
        <View style={{ backgroundColor: 'grey', height: 70, flexDirection: 'row'}}>

          <View style={{paddingTop: 20, paddingRight: 10, paddingLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>KAPS.COM</Text>
          </View>
          
          <View style={{paddingTop: 10}}>
            <TextInput 
             returnKeyType="search"
             search={this.state.search}
             onChangeText={ (e) => this.setState({ search: e })}
             onSubmitEditing={this.handlesubmit}
             underlineColorAndroid="transparent"
             type="text" placeholder="Search for local news" 
             style={{backgroundColor: 'white',  borderRadius: 10, paddingLeft: 13, width:200}}
             />
             </View>

          </View>
      );
    }
  }
  