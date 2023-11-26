import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UserData from './UserData';

const FlatListLooping = () => {
    const users = [
        {
            id: 1,
            name: 'Ram',
            email: '1@gmail.com'
        },
        {
            id: 2,
            name: 'Sam',
            email: '2@gmail.com'
        },
        {
            id: 3,
            name: 'Jadu',
            email: '3@gmail.com'
        },
        {
            id: 4,
            name: 'Madhu',
            email: '4@gmail.com'
        },
        {
            id: 5,
            name: 'Mala',
            email: '5@gmail.com'
        }
    ];
    return (
        <View>
            <Text style={styles.nameText}>Flat List Looping dynamic data</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <UserData item={item}/>}
                keyExtractor={item => item.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
    nameText: {
        fontSize: 20,
        margin: 4
    },
});
export default FlatListLooping;