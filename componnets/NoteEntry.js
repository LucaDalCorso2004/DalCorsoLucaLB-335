import { View, Text, Button, StyleSheet } from 'react-native';
export default function NoteEntry({ title, content }) {
    return (
        <View >

            <Text>Fach{title}</Text>
            <Text>Note{content}</Text>

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
