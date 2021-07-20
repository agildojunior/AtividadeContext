import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Pages/Home';
import { Pagina1 } from './Pages/Pagina1'; 
import { Pagina2 } from './Pages/Pagina2'; 
import { Pagina3 } from './Pages/Pagina3'; 
import { Pagina4 } from './Pages/Pagina4'; 
import { Pagina5 } from './Pages/Pagina5';


const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina3" component={Pagina3} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina4" component={Pagina4} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina5" component={Pagina5} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}