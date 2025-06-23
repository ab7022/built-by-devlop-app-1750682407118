import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import HabitDetailScreen from './src/screens/HabitDetailScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}