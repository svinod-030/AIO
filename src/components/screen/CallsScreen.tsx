import React from 'react';
import {View, Text, Button} from 'react-native'

const CallsScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calls Screen</Text>
        <Button title='Messages' onPress={() => navigation.navigate('Messages')}/>
    </View>
)

export default CallsScreen
