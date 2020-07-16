import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet } from 'react-native';

import { AccordionItem } from './AccordionItem'

const data = [
    { 
        title: 'Plastic',
        description: 'Plastic is bad.' 
    }, 
    {
        title: 'Oxybenzone', 
        description: 'Bleaches coral.'}];

export default class Accordion extends Component {
    renderItem = ({item}) => <AccordionItem item={item}/>;

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={data} renderItem={this.renderItem} keyExtractor={(index, _) => index + ''} />   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    }
})

