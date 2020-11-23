import React, {useState, useEffect} from 'react';
import {View, Button, PermissionsAndroid} from 'react-native'
import Messages from "./Messages";



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

    useEffect(() => {
        (async () => {
            try {
                const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS) &&
                    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.SEND_SMS) &&
                    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECEIVE_SMS)
                setPermission(status)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [])

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            {
                permission ?
                    <Messages /> :
                    <Button title='Grant permissions' onPress={requestPermissions}/>
            }
        </View>
)}

export default MessagesScreen
