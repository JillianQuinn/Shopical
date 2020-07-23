import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight, Button, Alert } from 'react-native';
 
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'


import CustomButton from '../Components/CustomButton';
import CameraApp from './camera';

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  center: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#7295df',
    height: ScreenHeight
  },
  title: {
    justifyContent: 'center',
    height: ScreenHeight - 320,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#EEEEEE',
    textAlign: 'center',

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: ScreenHeight/1.6,
    width: 420,
    position: 'absolute',
    // left: -125,
    alignSelf: 'center',
    // height: 500,
    // position: 'absolute',
    // right: -105,

  },
  buttonPosition: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    height: ScreenHeight - 500,
    // top: ScreenHeight - 100,
    // bottom: ScreenHeight - 700
  }
});



const Home = ({ navigation }) => (
  <View style={styles.center}>
    <View style={styles.view}>
      <Text style={styles.title}> SHOPICAL </Text>
      <Image style={styles.image}
       source={require('../images/earth-icon.png')}/>

      <CustomButton style={styles.buttonPosition}
        title="Go To Camera"
        onPress={() => navigation.push('Center on Ingredient List')}
        />
    </View>
  </View>
);

export default Home;
