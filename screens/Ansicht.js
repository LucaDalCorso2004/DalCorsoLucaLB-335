import { View, Text, Button, StyleSheet } from 'react-native';
export default function NoteEntry({ title, content }) {
    return (
        <View style={styles.container2}>

            <Text>Fach {title}</Text>
            <Text>Note: {content}</Text>
            <Button>Graph</Button>
            {noten.map(t => <NoteEntry title={t.fach} content={t.note} />)}
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