import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Settings extends React.Component {
    render() {
      return (
        <ImageBackground source={require('../img/back1.jpg')} style={{flex: 1}}>
        <Swiper showsButtons={true}>
        <View>
          <Text>Hello Swiper</Text>
        </View>
        <View>
          <Text>Beautiful</Text>
        </View>
        <View>
          <Text>And simple</Text>
        </View>
      </Swiper>
        </ImageBackground>
      );
    }
  }
  