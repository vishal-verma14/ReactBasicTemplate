'use strict';
import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const CommonImages = {
  appLogo: {source: require('./../assets/images/logo.png')},
  cameraImage: {
    source: require('./../assets/images/icons/camera.png'),
    style: {width: 21.4, height: 21.4},
  },
  signUpImage: {source: require('./../assets/images/icons/user-img.png')},
};

module.exports = {
  ...CommonImages,
};
