import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {colors} from '../../mainStyles/color';
export default class inputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput});
  }

  onChangeText = (name, event) => {
    // for a regular input field, read field name and value from the event
    console.log(name);
    console.log(event);
    // const fieldName = event.target.name;
    // const fieldValue = event.target.value;
    // this.props.onChangeText(fieldName, fieldValue);
  };

  render() {
    const {
      textColor,
      borderBottomColor,
      inputType,
      errorStyle,
      onChangeText,
      error,
    } = this.props;
    const {secureInput} = this.state;

    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';

    const keyboardType =
      inputType === 'email'
        ? 'email-address'
        : inputType === 'phone'
        ? 'phone-pad'
        : inputType === 'number'
        ? 'number-pad'
        : 'default';

    return (
      <>
        {inputType === 'password' ? (
          <View style={[styles.wrapper]}>
            <TextInput
              autoCorrect={false}
              style={[
                {color: inputColor, borderBottomColor: borderBottom},
                styles.inputFiled,
              ]}
              secureTextEntry={secureInput}
              onChangeText={value => {
                this.props.onChangeValue({
                  inputType,
                  value,
                });
              }}
              autoCapitalize="none"
              keyboardType={keyboardType}
            />
            <TouchableOpacity
              style={styles.showButton}
              onPress={this.toggleShowPassword}>
              <Text style={styles.showButtonText}>
                {secureInput ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.wrapper]}>
            <TextInput
              autoCorrect={false}
              style={[
                {color: inputColor, borderBottomColor: borderBottom},
                styles.inputFiled,
              ]}
              onChangeText={value => {
                this.props.onChangeValue({
                  inputType,
                  value,
                });
              }}
              autoCapitalize="none"
              keyboardType={keyboardType}
            />
          </View>
        )}
        <Text style={errorStyle}>{this.props.error}</Text>
      </>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
  },
  showButton: {
    //  custom icon
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
  checkmarkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 12,
  },
});
