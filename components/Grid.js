import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Grid = () => {
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
            <Text style={styles.nameText}>Grid with dynamic data</Text>
            <View style={styles.mainGrid}>
                {
                    users.map((item)=><Text style={styles.item} key={item.id}>{item.name}</Text>)
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    nameText: {
        fontSize: 20,
        margin: 4
    },
    mainGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        fontSize: 25,
        backgroundColor: 'blue',
        color: '#fff',
        margin: 5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical: 'center',
        textAlign:'center'
    },
});
export default Grid;