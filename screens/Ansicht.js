import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { usenoten } from "../Notencontext";
import { NoteEntry } from '../componnets/NoteEntry'
export default function AnsichtEntry({ }) {
    const noten = usenoten();



    return (
        <View >
            {noten.map(t => <NoteEntry key={t.id} title={t.fach} content={t.note} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 2,
        backgroundColor: '',
        alignItems: 'baseline',
    },
});