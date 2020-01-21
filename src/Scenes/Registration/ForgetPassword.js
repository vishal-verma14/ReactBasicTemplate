import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {validateEmail} from '../../constants/validation';
import {
  InputField,
  MainButton,
  Logo,
  Space80,
  Space40,
} from '../../components/index';
import {colors} from '../../mainStyles/color';
import {constants} from '../../constants/index';

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.validateEmail = validateEmail.bind(this);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{constants.forgetPassword}</Text>
          <Logo />
          <Space40 />

          <Text style={styles.text}>{constants.email}</Text>
          <InputField
            value={this.state.value}
            onChangeValue={this.validateEmail}
            textColor={colors.white}
            borderBottomColor={colors.white}
            inputType={constants.email}
            customStyle={{marginBottom: 30}}
          />

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('LoginScene');
            }}
            style={styles.signUpButton}>
            <MainButton buttonTextProp="SUBMIT" />
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
    backgroundColor: colors.primary,
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
