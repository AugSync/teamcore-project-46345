/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AboutScreen } from '../screens/AboutScreen';
import { QuestionsScreen } from '../screens/QuestionsScreen';

const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props: any) => {
  return (
    <AntDesign
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'black',
        }}
        appearance={{
          shadow: true,
          floating: true,
          whenActiveShow: TabElementDisplayOptions.BOTH,
          dotSize: DotSize.SMALL,
          horizontalPadding: 50,
          dotCornerRadius: 50,
        }}
      >
        <Tabs.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={color}
                name="questioncircle"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={color}
                name="infocirlceo"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
