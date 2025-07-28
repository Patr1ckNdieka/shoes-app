import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Splashscreen from '../Screens/Splashscreen';
import Loginscreen from '../Screens/Loginscreen';
import SignUpScreen from '../Screens/SignUpScreen';
import Products from '../Screens/Products';
import Orderscreen from '../Screens/Orderscreen';
import UserScreen from '../Screens/Userscreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab navigator (Products is the "Home")
const MainAppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') iconName = 'th-large';
        else if (route.name === 'Orders') iconName = 'shopping-cart';
        else if (route.name === 'User') iconName = 'user';

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Products} />
    <Tab.Screen name="Orders" component={Orderscreen} />
    <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
);

// Main stack: splash → login/signup → app
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splashscreen} /> */}
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="MainApp" component={MainAppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
