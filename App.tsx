import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Details from "./components/CompanyData";
import FlatList from './components/FlatList';
import MapList from './components/MapList';
import FormSubmit from "./components/FormSubmit";
import Grid from "./components/Grid";
import FlatListLooping from "./components/FlatListLooping";
import TestHo from "./components/TestHo";

let title = 'Hello react native';
let btn = 'PRESS HERE';

function App(): JSX.Element {
    let data = 100;
    const getData = () => {
        data = 20;
        console.warn(data);
    };
    return (
        <View>
            <ScrollView style={{marginBottom: 30}}>
                <Text style={{fontSize: 30}}>{data}</Text>
                <Button title={btn} onPress={() => getData()} color={'green'}></Button>
                <Button title='PRESS HERE WITHOUT PARAMITER' onPress={getData} color={'black'}></Button>
                <Details/>
                <FormSubmit/>
                <FlatList/>
                <MapList/>
                <Grid/>
                <FlatListLooping/>
                <TestHo/>
            </ScrollView>
        </View>
    );
}

export default App;
