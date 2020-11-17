import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CallsScreen from "./CallsScreen";
import MessagesScreen from "./MessagesScreen";
import ContactsScreen from "./ContactsScreen";

const Tab = createStackNavigator();

const HomeScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="Messages" component={MessagesScreen}/>
        <Tab.Screen name="Contacts" component={ContactsScreen}/>
        <Tab.Screen name="Calls" component={CallsScreen}/>
    </Tab.Navigator>
)

export default HomeScreen
