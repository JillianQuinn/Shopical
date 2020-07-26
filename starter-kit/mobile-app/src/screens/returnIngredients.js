import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Accordion from './Accordion/Accordion';

const returnIngredients = ({ navigation }) => (
  <Accordion></Accordion>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7295df',
  }
})
  
export default returnIngredients;