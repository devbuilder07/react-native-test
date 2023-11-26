import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const UserData = (props) => {
    const item = props.item;
    return(
        <View style={styles.box}>
            <Text style={styles.item}>{item.id}</Text>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        color: 'orange',
        flex: 1,
        margin: 2,
        textAlign: 'center'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom:10
    },
});
export default UserData;