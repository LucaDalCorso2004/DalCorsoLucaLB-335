import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useState } from "react";
import { usenoten, } from "../Notencontext";
import { NoteEntry } from '../componnets/NoteEntry'
import { Graphe } from '../componnets/Graphe';
import { GrapheEntry } from '../componnets/graphedesing';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AnsichtEntry({ }) {
    const noten = usenoten();
    const [fach4, setFaecher4] = useState('');


    const [chartData, setChartData] = useState([]);

    const Pressbuttongraphe = () => {
        const graphData = Graphe(fach4, noten);

        setChartData(graphData);
        console.log(setChartData)

        //  _storeData(); // Speichern der Daten
        //    _retrieveData();

    };

    return (
        <View >
            {noten.map(t => <NoteEntry key={t.id} title={t.fach} content={t.note} />)}

            <TextInput
                id='title'
                onChangeText={setFaecher4}
            />
            <Button title='Grpahe' onPress={Pressbuttongraphe}> </Button>
            {chartData.length > 0 && <GrapheEntry data={chartData} />}
        </View>
    );

}


const styles = StyleSheet.create({
    container2: {
        flex: 2,
        backgroundColor: '',
        alignItems: 'baseline',
    },
});