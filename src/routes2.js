import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Home } from './Pages/Home'; 
import { Pagina1 } from './Pages/Pagina1';
import { Pagina2 } from './Pages/Pagina2';
import { Pagina3 } from './Pages/Pagina3';
import { Pagina4 } from './Pages/Pagina4';
import { Pagina5 } from './Pages/Pagina5';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator();

const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

function parte1StackScreen() {
  return(
    <TecnicoStack.Navigator>
      <TecnicoStack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <TecnicoStack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <TecnicoStack.Screen name="Pagina2" component={Pagina2} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <TecnicoStack.Screen name="Pagina4" component={Pagina4} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
      <TecnicoStack.Screen name="Pagina5" component={Pagina5} options={{ title: 'Volte para o início', headerTitleAlign: 'center'}} />
    </TecnicoStack.Navigator>
  )
}


function parte2StackScreen() {
  return(
    <SuperiorStack.Navigator>
      <SuperiorStack.Screen name="Pagina3" component={Pagina3} options={{headerShown:false}}  />
    </SuperiorStack.Navigator>
  )
}

export  function Routes() {
  return (
      <Tabs.Navigator 
        tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#C72828',
        labelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        inactiveTintColor: '#B7B7CC',
      }}
      >
          <Tabs.Screen name="Tecnico" 
            options={{
              tabBarIcon: ({ color }) => <FontAwesome5 name="school" size={24} color="#5a1" /> ,
              title: 'IFRN',
            }}
          component={parte1StackScreen}/>

          <Tabs.Screen name="Superior" 
             options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-graduate" size={24} color="#5a1" />
              ),
              title: 'Cursos',
            }}
          component={parte2StackScreen}/>
      </Tabs.Navigator>
  );
}

