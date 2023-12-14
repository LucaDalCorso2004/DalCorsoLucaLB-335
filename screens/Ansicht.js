import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
export default function AnsichtEntry({ title, content }) {
    return (
        <View style={styles.container2}>

            <Text>Fach {title}</Text>
            <Text>Note: {content}</Text>
            <Button>Graph</Button>

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