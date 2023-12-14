
import { useState } from "react";
import { usenoten, useSetNoten } from "../Notencontext";
import { addnote2 } from '../componnets/hinzufuegen';

import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
export default function AddEntry({ }) {

    const [fach2, setFaecher2] = useState('');
    const [note2, setNote2] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();

    const Pressbutton = () => {
        let intnote = parseInt(note2)
        addnote2(fach2, intnote, setNoten, noten)

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