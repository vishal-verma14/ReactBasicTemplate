import {Platform, Alert, Linking} from 'react-native';
import ImagePicker from 'react-native-image-picker';

//url Type is Form Key during Api call
function createFormData(photo, body, urlType) {
  const data = new FormData();
  data.append(urlType, {
    name: photo.fileName ? photo.fileName : 'image',
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });
  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });
  return data;
}

//image process
function chooseImage(maximumWidth, maximumHeight) {
  let options = {
    title: 'Select Image',
    quality: 1.0,
    maxWidth: maximumWidth,
    maxHeight: maximumHeight,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return null;
    } else if (!!response.error) {
      if (Platform.OS === 'ios') {
        Alert.alert(response.error, '', [
          {
            text: 'OK',
            style: 'cancel',
          },
          {
            text: 'Setting',
            onPress: () => Linking.openURL('app-settings:'),
          },
        ]);
        return null;
      }
    } else {
      return response;
    }
  });
}

module.exports = {
  chooseImage,
  createFormData,
};
