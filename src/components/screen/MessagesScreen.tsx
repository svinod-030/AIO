import React from 'react';
import {View, Text, Button} from 'react-native'

const MessagesScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Messages Screen</Text>
        <Button title='Contacts' onPress={() => navigation.navigate('Contacts')}/>
    </View>
)

export default MessagesScreen
