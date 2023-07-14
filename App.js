import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Qr from './src/views/Qr';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Qr" component={Qr} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
