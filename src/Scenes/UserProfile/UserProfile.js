import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {constants} from '../../constants/index';

import {colors} from '../../mainStyles/color';
import {
  InputField,
  MainButton,
  UploadPhoto,
  Space80,
  Space40,
} from '../../components/index';

export default class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      value: '',
      email: '',
      imageResponse: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{constants.userProfile}</Text>

          <UploadPhoto fileUri={this.state.imageResponse.uri} />

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

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              this.props.navigation.navigate('UserProfileEdit');
            }}>
            <MainButton buttonTextProp="Edit Profile" />
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
