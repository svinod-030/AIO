import React, {useEffect, useState} from 'react'
import {Text, View, SectionList} from 'react-native'
import {FlatList, TouchableHighlight} from "react-native-gesture-handler";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SmsAndroid from 'react-native-get-sms-android';

const Messages = () => {

    const [smsList, setSmsList] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        let filter = {
            box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
            indexFrom: 0, // start from index 0
            maxCount: 10, // count of SMS to return each time
        }
        SmsAndroid.list(
            JSON.stringify(filter),
            (fail) => {
                console.log('Failed with this error: ' + fail);
            },
            (count, list) => {
                setSmsList(JSON.parse(list));
            },
        )
    }, [])

    const renderItem = ({item}) => {
        return (
            <TouchableHighlight
                style={{flex: 1, padding: 2, margin: 2}}
                key={item._id.toString()}
                onPress={() => console.log(item._id)}>
                <View style={{backgroundColor: Colors.white}}>
                    <Text>{item.address}</Text>
                    <Text>{new Date(item.date).toDateString()}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <>
            <View style={{flex: 1}}>
                <Text style={{
                    fontSize: 32,
                    backgroundColor: expanded ? Colors.primary : Colors.light,
                    color: expanded ? Colors.white : Colors.primary,
                    padding: 2,
                    margin: 2
                }} onPress={() => {
                    setExpanded(!expanded)
                }}>
                    Inbox
                </Text>
                {expanded && <FlatList
                    data={smsList}
                    renderItem={renderItem}
                    keyExtractor={item => item._id.toString()}
                />}
            </View>
        </>
)}

export default Messages
