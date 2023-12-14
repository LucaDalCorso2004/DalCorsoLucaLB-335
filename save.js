import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { addnote } from './componnets/erstellen';
import NoteEntry from './componnets/NoteEntry';
import { addnote2 } from './componnets/hinzufuegen';
import { deleteFach } from './componnets/deletefach';

export default function App() {
    const [noten, setNoten] = useState([]);
    const [fach, setFaecher] = useState('');
    const [note, setNote] = useState('');
    const [fach2, setFaecher2] = useState('');
    const [note2, setNote2] = useState('');
    const [fach3, setFaecher3] = useState('');


    const buttonPress = () => {
        parseInt(note)
        addnote(fach, note, setNoten, noten);

    };

    const deletePress = () => {
        deleteFach(setNoten, noten, fach3);
    };

    const Pressbutton = () => {
        let intnote = parseInt(note2)
        addnote2(fach2, intnote, setNoten, noten)

    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.button}>

                </View>
                <View>
                    <TextInput id='title'
                        style={styles.login}
                        onChangeText={value => { setFaecher(value) }
                        }
                    />
                    <TextInput id='info'
                        style={styles.login}
                        defaultValue="Description"
                        onChangeText={value => setNote(value)}
                    />
                    <Button style={styles.button2} title='create' onPress={buttonPress}></Button>

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
                    <Button style={styles.button2} title='hinzfügen' onPress={Pressbutton}></Button>
                </View>

                <View style={styles.button}>

                    <TextInput id='info'
                        style={styles.login}
                        defaultValue="Description"
                        onChangeText={value => setFaecher3(value)}
                    />
                    <Button title='"delete' onPress={deletePress} ></Button>

                </View>

            </View>
            {noten.map(t => <NoteEntry title={t.fach} content={t.note} />)}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
