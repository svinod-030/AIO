import React from 'react';
import {View, Text, Button} from 'react-native'

const ContactsScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contacts Screen</Text>
        <Button title='Calls' onPress={() => navigation.navigate('Calls')}/>
    </View>
)

export default ContactsScreen
