import React from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <Animatable.View animation='slideInDown' style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </Animatable.View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 10
  },
  textStyle: {
    fontSize: 20
  }
};

