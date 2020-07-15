import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Alert } from 'react-native';
import CustomButton from '../Components/CutsomButton';

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
    bottom: 150
  }
});

const Home = () => (
  <View style={styles.center}>
    <View style={styles.view}>
      <Text style={styles.title}> SHOPICAL </Text>
      <Image style={styles.image}
       source={require('../images/earth-icon.png')}
       />
      <CustomButton style={styles.buttonPosition}
      title="Get Started"
      onPress={() => Alert.alert('Button was pressed')}
      />
    </View>
  </View>
);

export default Home;
