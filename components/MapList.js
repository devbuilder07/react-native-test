import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
            <Text style={styles.nameText}>Map List Component</Text>
            {
                users.map((item) => <Text key={item.id} style={styles.item}>{item.name}</Text>)
            }
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
        color: 'black',
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        textAlign: 'center'
    }
});
export default flatList;