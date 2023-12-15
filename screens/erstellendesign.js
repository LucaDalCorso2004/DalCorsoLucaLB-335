import * as React from 'react'
import { useState } from "react";
import { usenoten, useSetNoten, usegraphe, useSetGraphe } from "../Notencontext";
import { addnote } from '../componnets/erstellen';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import AnsichtEntry from './Ansicht';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateScreen({ }) {

    const [fach, setFaecher] = useState('');
    const [note, setNote] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();
    /*
        const _storeData = async () => {
            try {
                
                // Hier nehme ich an, dass `noten.id` und `noten.content` gültige Werte sind.
                await AsyncStorage.setItem(JSON.stringify(noten), JSON.stringify(noten));
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
    const buttonPress = () => {
        let intnote = parseInt(note)
        addnote(fach, intnote, setNoten, noten);
        //    _storeData(); // Speichern der Daten
        //  _retrieveData();

    };

    return (
        <View>
            <View>
                <TextInput id='title'
                    //  style={styles.login}
                    onChangeText={value => { setFaecher(value) }
                    }
                />
                <TextInput id='info'
                    // style={styles.login}
                    defaultValue="Description"
                    onChangeText={value => setNote(value)}
                />
                <Button //style={styles.button2} 
                    title='create' onPress={buttonPress} ></Button>


            </View>

        </View >
    );
}


