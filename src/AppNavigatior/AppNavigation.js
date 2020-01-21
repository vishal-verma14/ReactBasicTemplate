import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  LoginScene,
  SignUpScene,
  ForgetPassword,
  UserProfile,
  UserProfileEdit,
} from '../Scenes';

const stackNavigator = createSwitchNavigator({
  LoginScene: {
    screen: LoginScene,
  },
  SignUpScene: {
    screen: SignUpScene,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  UserProfile: {
    screen: UserProfile,
  },
  UserProfileEdit: {
    screen: UserProfileEdit,
  },
});
export default createAppContainer(stackNavigator);
