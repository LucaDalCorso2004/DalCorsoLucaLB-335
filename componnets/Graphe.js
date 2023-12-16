import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { GrapheEntry } from '../componnets/graphedesing';
export function Graphe(fach, noten) {



    const filteredNoten = noten.filter((el) => fach === el.fach);



    const lineData = filteredNoten.map((el) => { // ChatGpt
        const values = el.Graphelist.map(s => ({ value: s }));
        console.log(`Values for ${el.fach}:`, values);
        return values;
    }).flat();


    return lineData;
}


