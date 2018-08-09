import React from 'react';
import { View, StyleSheet,  ScrollView,ImageBackground } from 'react-native';
import {  Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import BbcSports from  './BbcSports';
import ZambianNews from  './ZambianNews';
import BbcNews from  './BbcNews';
import CbcNews from  './CbcNews';
import CnbcNews from  './CnbcNews';
import CnnNews from  './CnnNews';
import EspnSports from  './EspnSports';
import FoxNews from  './FoxNews';
import FoxSports from  './FoxSports';
import GoogleNews from  './GoogleNews';
import NationalGeographic from  './NationalGeographic';
import NbcNews from  './NbcNews';
import NewScientist from  './NewScientist';
import NewYorkTimes from  './NewYorkTimes';
import UsaToday from  './UsaToday';
import AbcNews from  './AbcNews';

class AllNews extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./img/news.jpeg')} style={styles.container}>
      <View style={styles.container}>
      <ScrollView>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('ZambianNews')} title="Zambian News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('BbcSports')} title="BBC Sports News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('BbcNews')} title="BBC News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('CbcNews')} title="CBC News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('CnbcNews')} title="CNBC News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('CnnNews')} title="CNN News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('EspnSports')} title="Espn sports" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('FoxNews')} title="Fox News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('FoxSports')} title="Fox sports" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('GoogleNews')} title="Google News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('NationalGeographic')} title="National geographic" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('NbcNews')} title="Nbc News" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('NewScientist')} title="New scientist" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('NewYorkTimes')} title="New york times" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('UsaToday')} title="Usa today" />
      </View>
      <View style={{marginBottom: 15}}>
        <Button style={styles.but} onPress={() => this.props.navigation.navigate('AbcNews')} title="ABC News" />
      </View>
      </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       paddingTop: 10
    },
    text: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 15
    },
    but: {
        backgroundColor: 'grey',
        paddingBottom: 20,
    }
  })

  export default StackNavigator({
    Home: {
      screen: AllNews,
      navigationOptions: {
        headerTitle: 'Welcome to International News',
      },
    },

    BbcSports: {
        screen: BbcSports,
        navigationOptions: {
          headerTitle: 'BBC Sports',
        },
      },

    ZambianNews: {
        screen: ZambianNews,
        navigationOptions: {
          headerTitle: 'Zambian News',
        },
      },

      BbcNews: {
        screen: BbcNews,
        navigationOptions: {
          headerTitle: 'BBC News',
        },
      },

      CbcNews: {
        screen: CbcNews,
        navigationOptions: {
          headerTitle: 'CBC News',
        },
      },

      CnbcNews: {
        screen: CnbcNews,
        navigationOptions: {
          headerTitle: 'CNBC News',
        },
      },

      CnnNews: {
        screen: CnnNews,
        navigationOptions: {
          headerTitle: 'CNN News',
        },
      },

      EspnSports: {
        screen: EspnSports,
        navigationOptions: {
          headerTitle: 'ESPN Sports',
        },
      },

      FoxNews: {
        screen: FoxNews,
        navigationOptions: {
          headerTitle: 'Fox News',
        },
      },

      FoxSports: {
        screen: FoxSports,
        navigationOptions: {
          headerTitle: 'Fox Sports',
        },
      },

      GoogleNews: {
        screen: GoogleNews,
        navigationOptions: {
          headerTitle: 'Google News',
        },
      },

      NationalGeographic: {
        screen: NationalGeographic,
        navigationOptions: {
          headerTitle: 'National Geographic',
        },
      },

      NbcNews: {
        screen: NbcNews,
        navigationOptions: {
          headerTitle: 'NBC News',
        },
      },

        NewScientist: {
          screen: NewScientist,
          navigationOptions: {
            headerTitle: 'New Scientist',
          },
      },

      NewYorkTimes: {
        screen: NewYorkTimes,
        navigationOptions: {
          headerTitle: 'New York Times',
        },
      },

      UsaToday: {
        screen: UsaToday,
        navigationOptions: {
          headerTitle: 'USA Today',
        },
      },

      AbcNews: {
        screen: AbcNews,
        navigationOptions: {
          headerTitle: 'ABC News',
        },
      },
  });
