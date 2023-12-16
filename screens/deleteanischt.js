import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { usenoten, useSetNoten } from "../Notencontext";
import { useState, useEffect } from "react";
import { deleteFach } from '../componnets/deletefach';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DeleteEntry({ }) {
    const [fach3, setFaecher3] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();
    const [abgerufeneNoten, setAbgerufeneNoten] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem("notenData");
            if (value !== null) {
                const parsedData = JSON.parse(value);
                console.log("Abgerufene Daten:", parsedData);
                setAbgerufeneNoten(parsedData); // Setze den neuen State
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


    const deletePress = () => {

        deleteFach(setNoten, noten, fach3);
        _clearDataByName(fach3); // Speichern der Daten
        console.log("Vor dem Aufruf von _storeData", noten);


    };

    const _clearDataByName = async (fach3) => {
        try {
            const prevData = await AsyncStorage.getItem("notenData");
            if (prevData) {
                const prevNoten = JSON.parse(prevData);

                // Finde den Index des Eintrags mit dem gegebenen Namen
                const indexToDelete = prevNoten.findIndex(entry => entry.fach === fach3);

                if (indexToDelete !== -1) {

                    prevNoten.splice(indexToDelete, 1);

                    // Speichere die aktualisierten Daten
                    await AsyncStorage.setItem("notenData", JSON.stringify(prevNoten));
                    console.log(`Eintrag mit dem Namen ${fach3} wurde gelöscht.`);
                } else {
                    console.log(`Kein Eintrag mit dem Namen ${fach3} gefunden.`);
                }
            } else {
                console.log('Keine Daten gefunden.');
            }
        } catch (error) {
            console.error('Fehler beim Löschen der Daten:', error);
        }
    };

    const deleteDataByName = async (nameToDelete) => {
        await _clearDataByName(nameToDelete);
        // Führe weitere Aktionen nach dem Löschen durch, falls notwendig
    };

    // Aufruf der Funktion
    deleteDataByName(fach3);

    return (

        <ScrollView style={styles.container}>
            <Text>Geben sie das Fach ein welches sie Löschen wollen</Text>
            <TextInput id='info'
                style={styles.textbox}
                placeholder="Fachname"
                onChangeText={value => setFaecher3(value)}
            />
            <Button title='Löschen' onPress={deletePress} ></Button>

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