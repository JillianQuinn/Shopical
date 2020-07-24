import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet } from 'react-native';

import { AccordionItem } from './AccordionItem'

const data = [
    { 
        title: 'Polyethylene',
        description: 'These beads not only pollute our waterways, they are also being eaten by fish and other wildlife, which harms animals’ digestive tracts. ',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'red'
            }}), 
    }, 
    { 
        title: 'Fragrance',
        description: 'Wastewater treatment plants don’t break down synthetic frangrances, which means they slip into the rivers and oceans via sewage discharge.',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'red'
            }}), 
    }, 
    { 
        title: 'Benzophenone-8',
        description: 'Wastewater treatment plants don’t break down synthetic frangrances, which means they slip into the rivers and oceans via sewage discharge.',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'red'
            }}), 
    }, 
    {
        title: 'Diethanolamine', 
        description: 'DEA builds up in the environment and reacts with nitrates to form nitrosamines, which are highly carcinogenic to human and animal life. DEA is also fatally toxic to amphibians, crustaceans, fish, nematodes, flatworms, and animal plankton.',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'darkorange'
            }}), 
    },
    {
        title: 'Oxybenzone', 
        description: 'Found primarily in sunscreens, oxybenzone is toxic to coral and is contributing to the decline of reefs around the world. In the water, this chemical decreases corals\' defenses against bleaching, damaging their DNA and hurting their development.',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'darkorange'
            }}), 
    },
    { 
        title: 'Microcystaline wax',
        description: 'This ingredient is not extremely harmful',
        style: StyleSheet.create({
            title: {
                flex: 1, 
                fontSize: 22,
                color: 'green'
            }}), 
    }
];

export default class Accordion extends Component {
    constructor(props) {
        super(props);
    }
    renderItem = ({item}) => <AccordionItem item={item}/>;

    render() {
        console.log(this.props.route.params.ingredients)
        return (
            <View style={styles.container}>
                <FlatList data={this.props.route.params.ingredients} renderItem={this.renderItem} keyExtractor={(index, _) => index + ''} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#7295df',
        
    }
})
