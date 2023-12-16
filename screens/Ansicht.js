import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    ScrollView,
} from "react-native";
import { usenoten } from "../Notencontext";
import { NoteEntry } from "../componnets/NoteEntry";
import { Graphe } from "../componnets/Graphe";
import { GrapheEntry } from "../componnets/graphedesing";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FachEntry } from "../componnets/FachEntry";

export default function AnsichtEntry({ }) {
    const [fach4, setFaecher4] = useState("");
    const [chartData, setChartData] = useState([]);
    const [abgerufeneNoten, setAbgerufeneNoten] = useState([]); // Neuer State für abgerufene Daten
    const noten = usenoten();

    useEffect(() => {
        fetchData();
    }, []);

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
    const Pressbuttongraphe = () => {
        const graphData = Graphe(fach4, abgerufeneNoten);
        setChartData(graphData);
    };
    const Pressbuttongraphe2 = () => {
        const graphData = Graphe(fach4, noten);
        setChartData(graphData);
    };
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

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Erstellte Noten:</Text>
            {noten.map((entry) => (
                <NoteEntry key={entry.id} title={entry.fach} content={entry.note} />
            ))}

            <Text style={styles.header}>Gespeicherte Noten:</Text>
            {abgerufeneNoten.map((entry) => (
                <NoteEntry key={entry.id} title={entry.fach} content={entry.note} />
            ))}

            <TextInput
                id="title"
                style={styles.textbox}
                placeholder="Fachname"
                onChangeText={setFaecher4}
            />
            <Button title="Grpahe" onPress={Pressbuttongraphe}></Button>
            <Button title="Graphen erstellen" onPress={Pressbuttongraphe2}></Button>

            {chartData.length > 0 && <GrapheEntry data={chartData} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#abc",
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    textbox: {
        borderWidth: 1,
        borderColor: "#000",
        margin: 10,
        backgroundColor: "#fff",
        opacity: 0.3,
    },
});
