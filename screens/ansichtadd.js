
import { useState, useEffect } from "react";
import { usenoten, useSetNoten } from "../Notencontext";
import { addnote2 } from '../componnets/hinzufuegen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
export default function AddEntry({ }) {

    const [fach2, setFaecher2] = useState('');
    const [note2, setNote2] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();

    const [abgerufeneNoten, setAbgerufeneNoten] = useState([]);


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

    useEffect(() => {
        fetchData();
    }, []);

    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem("notenData");
            if (value !== null) {
                const parsedData = JSON.parse(value);
                console.log("Abgerufene Daten:", parsedData);
                setAbgerufeneNoten(parsedData);
                return parsedData;
            } else {
                console.log("Keine Daten gefunden.");
                return null;
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error);
        }
    };

    const fetchData = async () => {
        try {
            const abgerufeneNotenData = await _retrieveData();
            console.log(abgerufeneNotenData);
        } catch (error) {
            console.error("Fehler beim Abrufen und Verarbeiten der Daten:", error);
        }
    };

    const Pressbutton = () => {
        let intnote = parseFloat(note2)
        addnote2(fach2, intnote, setNoten, noten);
        alert(note2 + " hinzugefügt beim Fach" + fach2)
        console.log("Vor dem Aufruf von _storeData", noten);


    }


    return (
        <ScrollView style={styles.container}>
            <Text>Geben sie das Fach ein welches sie eine Note hinzufügen wollen</Text>
            <TextInput id='title'
                style={styles.textbox}
                placeholder="Fachname"
                onChangeText={value => { setFaecher2(value) }
                }
            />
            <TextInput id='info'
                style={styles.textbox}
                placeholder="Note"
                onChangeText={value => setNote2(value)}
            />
            <Button style={styles.button2} title='hinzfügen' onPress={Pressbutton} ></Button>
        </ScrollView>
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