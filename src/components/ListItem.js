import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableWithoutFeedback,
  LayoutAnimation,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>
            {this.props.item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.log(this.props);

    const { id, title } = this.props.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

const mapStateToProps = (state, ownProps) => { // ownProps = this.props inside component

  const expanded = state.selectedLibraryId === ownProps.item.id;

  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
