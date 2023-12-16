import { View, Text, Button, StyleSheet } from 'react-native';
export function NoteEntry({ title, content }) {
    return (
        <View >

            <Text>Fach{title}</Text>
            <Text>Note{content}</Text>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});
