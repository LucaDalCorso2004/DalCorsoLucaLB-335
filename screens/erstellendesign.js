import * as React from 'react'
import { useState } from "react";
import { usenoten, useSetNoten } from "../Notencontext";
import { addnote } from '../componnets/erstellen';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import AnsichtEntry from './Ansicht';

export default function CreateScreen({ }) {

    const [fach, setFaecher] = useState('');
    const [note, setNote] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();

    const buttonPress = () => {
        parseInt(note)
        addnote(fach, note, setNoten, noten);

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


