import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const InputType = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text style={styles.nameText}>Your name is: {name}</Text>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder={'Enter name'}/>

            <Button title={'Clear Me'} onPress={(text) => setName('')}/>
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 4
    },
    nameText: {
        fontSize: 20,
        margin: 4
    }
});
export default InputType;