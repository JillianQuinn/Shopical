import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Home from './src/screens/home';

import { HomeIcon } from './src/images/svg-icons';
import CameraApp from './src/screens/camera';
import returnIngredients from './src/screens/returnIngredients';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Home}
        />
        <Stack.Screen name="Please Center on Ingredient List" component={CameraApp} />
        <Stack.Screen name="Here are Your Ingredients" component={returnIngredients} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
};

export default App;
