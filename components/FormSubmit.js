import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const FormSubmit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);

    const resetFormData = () => {
        setDisplay(false);
        setName('');
        setPassword('');
        setEmail('');
    };
    return (
        <View>
            <Text style={{fontSize: 20}}>Name</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder={'Enter name'}/>
            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder={'Enter password'}/>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder={'Enter email'}/>


            <View style={styles.buttonPosition}>
                <Button color={'green'} title='Print Details' onPress={()=>setDisplay(true)}/>
            </View>
            <View style={styles.buttonPosition}>
                <Button title='Clear Details' onPress={resetFormData}/>
            </View>
            <View>
                {display?
                <View>
                    <Text>User name is:{name}</Text>
                    <Text>User password is:{password}</Text>
                    <Text>User email is:{email}</Text>
                </View>:null}
            </View>
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
    buttonPosition: {
        marginBottom: 10
    },
});

export default FormSubmit;