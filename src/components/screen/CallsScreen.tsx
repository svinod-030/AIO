import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native'

const CallsScreen = ({navigation}) => {
    const [permission, setPermission] = useState<boolean>(false)

    const requestPermissions = async () => {
        try {
            const permissions = await PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
                    PermissionsAndroid.PERMISSIONS.WRITE_CALL_LOG,
                    PermissionsAndroid.PERMISSIONS.CALL_PHONE
                ]
            )
            if(permissions[PermissionsAndroid.PERMISSIONS.READ_CALL_LOG] === PermissionsAndroid.RESULTS.GRANTED &&
                permissions[PermissionsAndroid.PERMISSIONS.WRITE_CALL_LOG] === PermissionsAndroid.RESULTS.GRANTED &&
                permissions[PermissionsAndroid.PERMISSIONS.CALL_PHONE] === PermissionsAndroid.RESULTS.GRANTED)
                setPermission(true)
        } catch (err) {
            console.warn(err);
        }
    };

    const checkPermission = async () => {
        try {
            return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CALL_LOG) &&
                await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_CALL_LOG) &&
                await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CALL_PHONE)
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

export default CallsScreen
