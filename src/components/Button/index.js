import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types'; // ES6

import { colors } from '../../mainStyles/color';
import {damin} from '../../mainStyles/damin';

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.buttonText}>{this.props.buttonTextProp}</Text>
      </View>
    );
  }
}
index.propTypes = {
  buttonTextProp: PropTypes.string,
};


const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    borderColor: colors.button1BorderColor,
    backgroundColor: colors.button1color,
    padding: 12,
  },
  buttonText: {
    alignSelf: 'center',
    color: colors.button1TextColor,
  },
});
