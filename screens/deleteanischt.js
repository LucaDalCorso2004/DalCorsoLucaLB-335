import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
export default function deleteEntry({ title, content }) {
    return (

        <View style={styles.button}>

            <TextInput id='info'
                style={styles.login}
                defaultValue="Description"
                onChangeText={value => setFaecher3(value)}
            />
            <Button title='"delete'  ></Button>

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