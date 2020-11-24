import React, {useEffect, useState} from 'react'
import {Text, View, RefreshControl} from 'react-native'
import {FlatList, TouchableHighlight} from "react-native-gesture-handler";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SmsAndroid from 'react-native-get-sms-android';
import _ from 'lodash';

const Messages = () => {

    const [contacts, setContacts] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        fetchMessages()
        setRefreshing(false)
    }, [])

    const fetchMessages = () => {
        let filter = {
            box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
        }
        SmsAndroid.list(
            JSON.stringify(filter),
            (fail) => {
                console.log('Failed with this error: ' + fail);
            },
            (count, list) => {
                const groupByMobile = _.chain(JSON.parse(list)).sortBy('date').reverse().groupBy('address')
                    .map(function (item, itemId) {
                        return {id: itemId, count: _.values(_.countBy(item, 'address'))[0], data: item}
                    }).value()
                setContacts(groupByMobile)
            }
        )
    }

    useEffect(() => {
        fetchMessages();
    }, [])

    const renderItem = ({item}) => {
        return (
            <TouchableHighlight
                style={{flex: 1, padding: 2, margin: 2}}
                key={item.id}
                onPress={() => console.log(item.data.length)}>
                <View style={{backgroundColor: Colors.white, flexDirection: 'row'}}>
                    <Text style={{flex: 4}}>{item.id}</Text>
                    <Text style={{flex: 1}}>{item.count}</Text>
                    <Text style={{flex: 2}}>{new Date(item.data[0].date).toLocaleDateString()}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
)}

export default Messages
