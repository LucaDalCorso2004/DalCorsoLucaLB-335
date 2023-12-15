
import { useState } from "react";
import { usenoten, useSetNoten } from "../Notencontext";
import { addnote2 } from '../componnets/hinzufuegen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
export default function AddEntry({ }) {

    const [fach2, setFaecher2] = useState('');
    const [note2, setNote2] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();
    /*
        const _storeData = async () => {
            try {
                // Hier nehme ich an, dass `noten.id` und `noten.content` gültige Werte sind.
                await AsyncStorage.setItem(JSON.stringify(noten.id), noten.content);
                console.log('Daten erfolgreich gespeichert!');
            } catch (error) {
                console.error('Fehler beim Speichern der Daten:', error);
            }
        };
        const _retrieveData = async () => {
            try {
                // Hier nehme ich an, dass `notes.content` einen gültigen Wert hat.
                const value = await AsyncStorage.getItem(noten.content);
                if (value !== null) {
                    console.log('Abgerufene Daten:', value);
                } else {
                    console.log('Keine Daten gefunden.');
                }
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten:', error);
            }
        };*/
    const Pressbutton = () => {
        let intnote = parseInt(note2)
        addnote2(fach2, intnote, setNoten, noten)
        //      _storeData(); // Speichern der Daten
        //        _retrieveData();




    }

    return (
        <View>
            <TextInput id='title'
                style={styles.login}
                onChangeText={value => { setFaecher2(value) }
                }
            />
            <TextInput id='info'
                style={styles.login}
                defaultValue="Description"
                onChangeText={value => setNote2(value)}
            />
            <Button style={styles.button2} title='hinzfügen' onPress={Pressbutton} ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'baseline',
    },
});