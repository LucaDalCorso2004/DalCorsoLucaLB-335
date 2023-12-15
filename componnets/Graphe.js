import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { GrapheEntry } from '../componnets/graphedesing';
export function Graphe(fach, noten) {
    const sampleData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

    // Loggen Sie die Rohdaten für das Fach
    console.log(`Raw data for ${fach}:`, noten);

    // Filtern Sie die Noten für das angegebene Fach
    const filteredNoten = noten.filter((el) => fach === el.fach);
    console.log(`Filtered data for ${fach}:`, filteredNoten);

    // Extrahieren Sie die Werte aus der Graphelist und erstellen Sie das LineChart-Datenformat
    const lineData = filteredNoten.map((el) => {
        const values = el.Graphelist.map(s => ({ value: s }));
        console.log(`Values for ${el.fach}:`, values);
        return values;
    }).flat();
    console.log('Final LineChart data:', lineData);

    return lineData;
}


