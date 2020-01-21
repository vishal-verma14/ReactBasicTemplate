import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {appLogo} from '../../mainStyles/image';
export default class index extends Component {
  render() {
    return (
      <Image
        style={styles.logoStyle}
        source={appLogo.source}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  logoStyle: {
    height: 100,
    width: 100,
    alignSelf: "center"
  },
});
