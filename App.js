import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import InterestPointsScreen from './src/screens/InterestPointsScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import MapScreen from './src/screens/MapScreen';
import { FontAwesome } from '@expo/vector-icons';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    InterestScreen:{
      screen: InterestPointsScreen,
      navigationOptions: {
        tabBarLabel: 'Interest Screen',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="map-marker" size={24} color="black" />
        )
      }  
    },
    Map:{
      screen: MapScreen,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="map-o" size={24} color="black" />
        )
      }  
    },
    Account: {
      screen : AccountScreen,
      navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={24} color="black" />
      )
      }  
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
