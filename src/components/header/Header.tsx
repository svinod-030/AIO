import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = () => (
    <View>
        <Text style={styles.header}>AIO</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        color: Colors.white,
        backgroundColor: Colors.dark,
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    }
});

export default Header
