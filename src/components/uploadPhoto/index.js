import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {cameraImage, signUpImage} from '../../mainStyles/image';
import {colors} from '../../mainStyles/color';

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.fileUri ? (
          <View>
            <Image
              style={styles.image}
              source={{uri: this.props.fileUri}}></Image>
            <Image style={styles.plus} source={cameraImage.source}></Image>
          </View>
        ) : (
          <View>
            <Image style={styles.image} source={signUpImage.source}></Image>
            <Image style={styles.plus} source={cameraImage.source}></Image>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 94,
    height: 94,
    overflow: 'hidden',
    borderRadius: 46,
    top: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  plus: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    bottom: 30,
    left: 40,
  },
  wrapper: {
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    borderRadius: 46,

    alignSelf: 'center',
  },
});
