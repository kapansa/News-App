import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./img/news.jpeg')} style={styles.container}>
       <Text style={styles.text}>INTERNATIONAL NEWS</Text>
       <Text style={styles.text}>KAPS.COM</Text>
      </ImageBackground>
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

