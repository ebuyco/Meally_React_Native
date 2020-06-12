import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={SearchScreen}
                options={{ title: 'Food Search'}}
                />
                <Stack.Screen
                name="FoodDetails"
                component={FoodDetailScreen}
                />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
