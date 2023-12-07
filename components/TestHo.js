import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const TestHo = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.warn('Hello');
    },[]);
    return (
        <View>
            <Text style={styles.nameText}>Life cycle with use effect Component</Text>
            <Text style={styles.nameText}>Count value: {count}</Text>
            <Button title={'Update Count'} onPress={()=>setCount(count+1)}/>
        </View>
    );
};
const styles = StyleSheet.create({
    nameText: {
        fontSize: 20,
        margin: 4,
    },
});
export default TestHo;
