import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { usenoten, useSetNoten } from "../Notencontext";
import { useState } from "react";
import { deleteFach } from '../componnets/deletefach';
export default function DeleteEntry({ }) {
    const [fach3, setFaecher3] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();

    const deletePress = () => {
        deleteFach(setNoten, noten, fach3);
    };


    return (

        <View style={styles.button}>

            <TextInput id='info'
                style={styles.login}
                defaultValue="Description"
                onChangeText={value => setFaecher3(value)}
            />
            <Button title='"delete' onPress={deletePress} ></Button>

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