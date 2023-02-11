import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParamList } from './ParamList';

import HomeScreen from '../../screens/BottomScreens/HomeScreen';
import HistoryScreen from '../../screens/BottomScreens/HistoryScreen';
import ReserveScreen from '../../screens/BottomScreens/ReserveScreen';
import ProfileScreen from '../../screens/BottomScreens/ProfileScreen';
import { Icon } from '@rneui/themed';
import R from '../../res/R';
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: R.colors.primary,
        headerShown: false,
      }}>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" type="font-awesome" color={focused ? R.colors.primary : 'gray'} />
          ),
          tabBarLabel: 'پروفایل',
          tabBarLabelStyle: styles.labelTextStyle,
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="history" type="font-awesome" color={focused ? R.colors.primary : 'gray'} />
          ),
          tabBarLabel: 'تاریخچه',
          tabBarLabelStyle: styles.labelTextStyle,
        }}
      />
      <Tab.Screen
        name="ReserveScreen"
        component={ReserveScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="book" type="font-awesome" color={focused ? R.colors.primary : 'gray'} />
          ),
          tabBarLabel: 'رزرو',
          tabBarLabelStyle: styles.labelTextStyle,
        }}
      />

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" type="font-awesome" color={focused ? R.colors.primary : 'gray'} />
          ),
          tabBarLabel: 'خانه',
          tabBarLabelStyle: styles.labelTextStyle,
        }}
      />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  labelTextStyle: {
    fontFamily: R.fonts.IRANSansMobile,
  },
});
