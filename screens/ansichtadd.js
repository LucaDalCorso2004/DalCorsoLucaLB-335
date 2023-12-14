import { View, Text, Button, StyleSheet } from 'react-native';
export default function NoteEntry({ title, content }) {
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
            <Button style={styles.button2} title='hinzfügen' onPress={Pressbutton}></Button>
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