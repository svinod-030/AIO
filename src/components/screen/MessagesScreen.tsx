import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native'

const MessagesScreen = ({navigation}) => {
    const [permission, setPermission] = useState<boolean>(false)

    const requestPermissions = async () => {
        try {
            const permissions = await PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.READ_SMS,
                    PermissionsAndroid.PERMISSIONS.SEND_SMS,
                    PermissionsAndroid.PERMISSIONS.RECEIVE_SMS
                ]
            );
            if(permissions[PermissionsAndroid.PERMISSIONS.READ_SMS] === PermissionsAndroid.RESULTS.GRANTED &&
                permissions[PermissionsAndroid.PERMISSIONS.SEND_SMS] === PermissionsAndroid.RESULTS.GRANTED &&
                permissions[PermissionsAndroid.PERMISSIONS.RECEIVE_SMS] === PermissionsAndroid.RESULTS.GRANTED)
                setPermission(true)
        } catch (err) {
            console.warn(err);
        }
    };

    const checkPermission = async () => {
        try {
            return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS) &&
                await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.SEND_SMS) &&
                await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECEIVE_SMS)
        } catch (e) {
            console.error(e)
        }
    }

    checkPermission().then((state) => setPermission(state))

    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {
            permission ?
                <Text>Permissions Granted</Text> :
                <Button title='Grant permissions' onPress={requestPermissions}/>
        }
    </View>
)}

export default MessagesScreen
