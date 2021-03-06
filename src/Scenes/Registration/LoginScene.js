import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../mainStyles/color';
import {constants} from '../../constants/index';
import {validateEmail, checkPassword} from '../../constants/validation';

import {
  InputField,
  MainButton,
  Logo,
  Space80,
  Space40,
} from '../../components/index';

export default class LoginScene extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        text: '',
        message: '',
        isValid: false,
      },
      password: {
        text: '',
        message: '',
        isValid: false,
      },
      value: '',
    };
    this.validateEmail = validateEmail.bind(this);
    this.checkPassword = checkPassword.bind(this);
  }

  btnSubmit() {
    if (this.state.email.isValid && this.state.password.isValid) {
      this.props.navigation.navigate('UserProfile');
    } else {
      alert('Please fill credentials');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{constants.login}</Text>
          <Logo />
          <Space40 />

          <Text style={styles.text}>{constants.email}</Text>
          <InputField
            value={this.state.email.text}
            onChangeValue={this.validateEmail}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType={constants.email}
            errorStyle={styles.error}
            error={this.state.email.message}
          />

          <Text style={styles.text}>{constants.password}</Text>
          <InputField
            value={this.state.password.value}
            onChangeValue={this.checkPassword}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType={constants.password}
            errorStyle={styles.error}
            error={this.state.password.message}
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              this.btnSubmit();
            }}>
            <MainButton buttonTextProp={constants.login} />
          </TouchableOpacity>

          <Space80 />

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ForgetPassword');
            }}
            style={styles.signUpButton}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUpScene');
            }}
            style={styles.signUpButton}>
            <MainButton buttonTextProp="Sign Up" />
          </TouchableOpacity>
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
  error: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: colors.errorColor,
  },
});
