import React from 'react';
import { View } from 'react-native';
import SearchBar from  './components/SearchBar';
import NewsView from  './components/NewsView';
import AllNews from  './components/AllNews';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={{flex: 1}}>
        <NewsView />
      </View>
    );
  }
}

