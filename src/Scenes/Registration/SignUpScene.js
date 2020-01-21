import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {colors} from '../../mainStyles/color';
import {
  InputField,
  MainButton,
  UploadPhoto,
  Space80,
  Space40,
} from '../../components/index';
import {
  validateEmail,
  checkPassword,
  phoneNumber,
  isRequired,
} from '../../constants/validation';
import {chooseImage, createFormData} from '../Common/common';

export default class SignUpScene extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      value: '',
      email: '',
      imageResponse: '',
    };
    this.validateEmail = validateEmail.bind(this);
    this.checkPassword = checkPassword.bind(this);
    this.phoneNumber = phoneNumber.bind(this);
    this.isRequired = isRequired.bind(this);
    this.chooseImage = chooseImage.bind(this);
    this.createFormData = createFormData.bind(this);
  }

  toggleImage = (maxW, maxH) => {
    let options = {
      title: 'Select Image',
      quality: 1.0,
      maxWidth: maxW,
      maxHeight: maxH,
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
        this.setState({
          imageResponse: response,
        });
        return response;
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>Sign Up</Text>

          <TouchableOpacity
            onPress={() => {
              this.toggleImage(100, 100);
            }}>
            <UploadPhoto fileUri={this.state.imageResponse.uri} />
          </TouchableOpacity>

          <Space40 />

          <Text style={styles.text}>Name</Text>
          <InputField
            onChangeValue={this.isRequired}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="default"
            customStyle={{marginBottom: 30}}
          />

          <Text style={styles.text}>Phone</Text>
          <InputField
            onChangeValue={this.phoneNumber}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="phone"
            customStyle={{marginBottom: 30}}
          />

          <Text style={styles.text}>Email</Text>
          <InputField
            onChangeValue={this.validateEmail}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="email"
            customStyle={{marginBottom: 30}}
          />

          <Text style={styles.text}>Password</Text>
          <InputField
            onChangeValue={this.checkPassword}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="password"
            customStyle={{marginBottom: 30}}
          />

          <Text style={styles.text}>Confirm Password</Text>
          <InputField
            onChangeValue={this.checkPassword}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType="password"
            customStyle={{marginBottom: 30}}
          />

          <TouchableOpacity style={styles.signInButton}>
            <MainButton buttonTextProp="Sign Up" />
          </TouchableOpacity>

          <Space80 />

          <Text style={styles.forgetText}>Already Have An Account?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('LoginScene');
            }}
            style={styles.signUpButton}>
            <MainButton buttonTextProp="Sign In" />
          </TouchableOpacity>

          <Space80 />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginTop: 70,
    flex: 1,
    flexDirection: 'column',
  },

  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
    marginBottom: 40,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    marginTop: 20,
  },
  forgetText: {
    color: colors.white,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 12,
    textAlign: 'center',
  },
  signInButton: {
    marginTop: 15,
  },
  signUpButton: {
    marginTop: 20,
  },
});
