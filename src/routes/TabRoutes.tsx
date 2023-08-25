import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Categories from '../screens/categories/Categories';
import Account from '../screens/account/Account';
import Cart from '../screens/cart/Cart';
import {IRootTabParamList} from './types';
import {Image} from 'react-native';
import {CartIcon, CategoryIcon, HomeIcon, UserIcon} from '../icons';
import Box from '../theme/Box';
import {palette} from '../theme/light';

const Tab = createBottomTabNavigator<IRootTabParamList>();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Box>
              <Image
                source={HomeIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? palette.blue : palette.black,
                }}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <Box>
              <Image
                source={CategoryIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? palette.blue : palette.black,
                }}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Box>
              <Image
                source={UserIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? palette.blue : palette.black,
                }}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Box>
              <Image
                source={CartIcon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? palette.blue : palette.black,
                }}
              />
            </Box>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
