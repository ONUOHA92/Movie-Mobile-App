import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screen/Home';
import FavouriteScreen from '../screen/Favourite'
import ROUTES from '../constants/routes';
import TabBarIcon, { TabBarIconMd } from '../components/TabBarIcon';
import { PRIMARY_COLOR } from '../constants/color';

const activeTintColor = PRIMARY_COLOR


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      tabBarOptions={{
        activeTintColor,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVOURITE}
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="piggy-bank" />,
        }}
      />


    </Tab.Navigator>
  );
}
