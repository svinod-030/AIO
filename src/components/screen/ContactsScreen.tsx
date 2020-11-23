import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native'

const ContactsScreen = ({navigation}) => {
    const [permission, setPermission] = useState<boolean>(false)

    const requestPermissions = async () => {
        try {
            const permissions = await PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                    PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
                ]
            );
            if(permissions[PermissionsAndroid.PERMISSIONS.READ_CONTACTS] === PermissionsAndroid.RESULTS.GRANTED &&
                permissions[PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS] === PermissionsAndroid.RESULTS.GRANTED)
                setPermission(true)
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS) &&
                    await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS)
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
                    <Button title='Permissions Granted' /> :
                    <Button title='Grant permissions' onPress={requestPermissions}/>
            }
        </View>
)}

export default ContactsScreen
