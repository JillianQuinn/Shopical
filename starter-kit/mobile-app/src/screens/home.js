import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../Components/CutsomButton';
import CameraApp from './camera';

const styles = StyleSheet.create({
  center: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#7295df',
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#EEEEEE',
    textAlign: 'center',
    paddingBottom: 600
  },
  image: {
    flex: 1,
    width: 450,
    height: 450,
    position: 'absolute',
    right: -120,
  },
  buttonPosition: {
    bottom: 200
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
      onPress={() => navigation.navigate('Please Center on Ingredient List')}
      />
    </View>
  </View>
);

export default Home;
