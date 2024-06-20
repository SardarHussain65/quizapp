import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Quiz} from './screens';
import {Quiz_2} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Level 1">
        <Stack.Screen
          name="Level 1"
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Level 2"
          component={Quiz_2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
