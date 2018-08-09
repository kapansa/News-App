import React from 'react';
import { View, Text, ImageBackground, StyleSheet,WebView  } from 'react-native';

export default class ZambianNews extends React.Component {
  render() {
    return (
      <WebView
          source={{uri: 'https://mwebantu.com/'}}
          style={{marginTop: 20}}
        />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
})
