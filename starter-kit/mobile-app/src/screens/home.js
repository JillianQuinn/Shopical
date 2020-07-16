import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight, Button, Alert } from 'react-native';
 
import { ScrollView } from 'react-native-gesture-handler';


import CustomButton from '../Components/CustomButton';
import CameraApp from './camera';

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7295df',
    height: 750,
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
  },
  title: {
    justifyContent: 'center',
    height: 550,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#EEEEEE',
    textAlign: 'center',
    paddingBottom: 520,
    // paddingTop: -30
  },
  image: {
    flex: 1,
    width: 420,
    height: 500,
    position: 'absolute',
    right: -105,

  },
  buttonPosition: {
    bottom: 100,
    justifyContent: 'center',
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
        onPress={() => navigation.push('Please Center on Ingredient List')}
        />
    </View>
  </View>
);

export default Home;
