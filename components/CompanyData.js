import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import InputType from './InputType';

const Details = () => {
    const [name, setName] = useState('Sayan');
    const updateName = () => {
        setName('Sayan Atta');
    };
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Name: {name}</Text>
            <Text style={{ fontSize: 20 }}>Age: 25</Text>
            <Button title='Update Name' onPress={updateName} />

            <User name={name} />
            <InputType />

        </View>
    );
};

const User = (propes) => {
    return (
        <View style={{ backgroundColor: 'green', padding: 5 }}>
            <Text style={{ fontSize: 20 }}>{propes.name}</Text>
        </View>
    );
};

export default Details;