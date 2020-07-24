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
            <Text style={styles.description}>{this.props.item[0].DESCRIPTION}</Text>
        </View>
    )

    render() {
        const {isSelected} = this.state;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={styles.titleContainer}><Text style={styles.title}>{this.props.item[0].ING_NAME}</Text>
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
        color: '#7295df'
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