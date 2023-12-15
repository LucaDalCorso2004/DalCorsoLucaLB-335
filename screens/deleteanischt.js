import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { usenoten, useSetNoten } from "../Notencontext";
import { useState } from "react";
import { deleteFach } from '../componnets/deletefach';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DeleteEntry({ }) {
    const [fach3, setFaecher3] = useState('');
    const noten = usenoten();
    const setNoten = useSetNoten();

    /*  const _storeData = async () => {
          try {
              // Hier nehme ich an, dass `noten.id` und `noten.content` gültige Werte sind.
              await AsyncStorage.setItem(JSON.stringify(noten.id), noten.content);
              console.log('Daten erfolgreich gespeichert!');
          } catch (error) {
              console.error('Fehler beim Speichern der Daten:', error);
          }
      };
      const _retrieveData = async () => {
          try {
              // Hier nehme ich an, dass `notes.content` einen gültigen Wert hat.
              const value = await AsyncStorage.getItem(noten.content);
              if (value !== null) {
                  console.log('Abgerufene Daten:', value);
              } else {
                  console.log('Keine Daten gefunden.');
              }
          } catch (error) {
              console.error('Fehler beim Abrufen der Daten:', error);
          }
      };*/
    const deletePress = () => {
        deleteFach(setNoten, noten, fach3);
        // _storeData(); // Speichern der Daten
        //   _retrieveData();

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