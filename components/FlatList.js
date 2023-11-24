import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const flatList = () => {
    const users = [
        {
            id: 1,
            name: 'Ram'
        },
        {
            id: 2,
            name: 'Sam'
        },
        {
            id: 3,
            name: 'Jadu'
        },
        {
            id: 4,
            name: 'Madhu'
        },
        {
            id: 5,
            name: 'Mala'
        }
    ];
    return (
        <View>
            <Text style={styles.nameText}>Flat List Component</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item => item.id}/>
        </View>
    );
};
const styles = StyleSheet.create({
    nameText: {
        fontSize: 20,
        margin: 4
    },
    item: {
        fontSize: 25,
        padding: 10,
        color:'black',
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth:1,
        margin: 10,
        textAlign: 'center'
    }
});
export default flatList;