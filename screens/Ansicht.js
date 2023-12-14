import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { usenoten, useSetNoten } from "../Notencontext";
export default function AnsichtEntry({ }) {
    const noten = usenoten();
    const setNoten = useSetNoten();


    return (
        <View >
            {noten.map(t => <AnsichtEntry key={t.id} title={t.fach} content={t.note} />)}
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