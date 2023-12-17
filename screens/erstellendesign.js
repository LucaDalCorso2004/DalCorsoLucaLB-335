import * as React from 'react'
import { useState } from "react";
import { usenoten, useSetNoten, usegraphe, useSetGraphe } from "../Notencontext";
import { addnote } from '../componnets/erstellen';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateScreen({ }) {

    const [fach, setFaecher] = useState('');
    const [note, setNote] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();
    const _storeData = async (noten) => {
        try {
            console.log(noten)
            console.log("vordem speichern")
            if (noten) {
                const prevData = await AsyncStorage.getItem("notenData");
                const prevNoten = prevData ? JSON.parse(prevData) : [];


                const updatedNoten = [...prevNoten, ...noten];


                await AsyncStorage.setItem("notenData", JSON.stringify(updatedNoten));
                console.log("Nach dem Speichern", updatedNoten);
            } else {
                console.error("Fehler beim Speichern der Daten: noten ist undefined.");
            }
        } catch (error) {
            console.error('Fehler beim Speichern der Daten:', error);
        }
    };



    const buttonPress = () => {
        let intnote = parseInt(note)
        addnote(fach, intnote, setNoten, noten);
        alert(fach + " erstellt")
        _storeData(noten)



    };

    return (

        <ScrollView style={styles.container}>
            <Text>Geben sie das Fach ein und die Note zum Fach,um es zuerstellen.</Text>
            <TextInput id='title'
                style={styles.textbox}
                onChangeText={value => { setFaecher(value) }
                }
            />
            <TextInput id='info'
                style={styles.textbox}
                defaultValue="Description"
                onChangeText={value => setNote(value)}
            />
            <Button //style={styles.button2} 
                title='create' onPress={buttonPress} ></Button>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#abc",
        padding: 16,
        minHeight: 200,
        rowGap: 4,
    },

    textbox: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#000",
        margin: 10,
        backgroundColor: "#fff",
        opacity: 30,
    },

});

