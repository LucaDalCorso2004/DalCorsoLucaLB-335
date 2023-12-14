import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export async function deleteFach(setNoten, prevTodos, fach) {


    const neueDaten = prevTodos.filter(el => el.fach !== fach);

    setNoten(neueDaten);






};


