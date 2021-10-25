import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants-screen';
import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area-component';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'fast-food',
  Map: 'md-map',
  Settings: 'settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const MapScreen = () => (
  <SafeArea>
    <Text>MapScreen</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen
              name='Restaurants'
              options={{ headerShown: false }}
              component={RestaurantsScreen}
            />

            <Tab.Screen
              name='Map'
              options={{ headerShown: false }}
              component={MapScreen}
            />

            <Tab.Screen
              name='Settings'
              options={{ headerShown: false }}
              component={SettingsScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
