import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.title}>{this.props.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default ListItem;
