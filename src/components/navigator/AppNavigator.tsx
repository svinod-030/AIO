import {NavigationContainer} from "@react-navigation/native";
import CallsScreen from "../screen/CallsScreen";
import ContactsScreen from "../screen/ContactsScreen";
import MessagesScreen from "../screen/MessagesScreen";
import React from 'react';
import createMaterialTopTabNavigator
    from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createMaterialTopTabNavigator();

export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Calls" headerMode="none" tabBarOptions={{
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.light,
            labelStyle: {fontSize: 14, fontWeight: 'bold'},
            style: {backgroundColor: Colors.primary},
        }}>
            {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
            <Stack.Screen name="Calls" component={CallsScreen}/>
            <Stack.Screen name="Contacts" component={ContactsScreen}/>
            <Stack.Screen name="Messages" component={MessagesScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
