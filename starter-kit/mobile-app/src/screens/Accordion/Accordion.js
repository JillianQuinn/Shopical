import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { AccordionItem } from './AccordionItem'

export default class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => <AccordionItem item={item}/>;

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.image}
            source={{ isStatic: true, uri: this.props.route.params.photo }}
          />
          <FlatList
            data={this.props.route.params.ingredients}
            renderItem={this.renderItem}
            keyExtractor={(index, _) => index + ''}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#7295df',
    justifyContent: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 250,
    width: 250,
    marginBottom: 15,
  }
})
