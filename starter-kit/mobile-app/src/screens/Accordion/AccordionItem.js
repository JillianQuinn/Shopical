import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { images } from "../../assets"

const propTypes = {
  item: PropTypes.object
};

class AccordionItem extends Component {
  state = {
    isSelected: false
  }

  onPress = () => {
    this.setState((prevState, prevProps) => ({
      isSelected: !prevState.isSelected
    }));
  }

  renderDetails = () => (
    <View>
      <Text style={styles.description}>
        {this.props.item.DESCRIPTION}
      </Text>
    </View>
  )

  render() {
    const {isSelected} = this.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Text
              style={this.props.item.HARMFULNESS == 'high' ? styles.high : (this.props.item.HARMFULNESS == 'low' ? styles.low : styles.medium)}>
              {this.props.item.ING_NAME}
            </Text>
            <Image source={images.expand} style={styles.image}/>
          </View>
        </TouchableWithoutFeedback>
        {isSelected && this.renderDetails()}
      </View>
    )
  }
}

AccordionItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    margin: 10
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  title: {
    flex: 1,
    fontSize: 22,
  },
  high: {
    flex: 1,
    fontSize: 22,
    color: 'red'
  },
  medium: {
    flex: 1,
    fontSize: 22,
    color: 'darkorange'
  },
  low: {
    flex: 1,
    fontSize: 22,
    color: 'green'
  },
  description: {
    flex: 1,
    fontSize: 18,
    color: "gray",
    paddingTop: 10
  },
  image: {
    width: 20,
    height: 20
  }
});

export { AccordionItem };