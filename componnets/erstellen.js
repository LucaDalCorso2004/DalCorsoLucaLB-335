import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { playSoundgood } from './clapaudio'
import { playSoundbad } from './alarmaudio'

let id = 1;
export async function addnote(fach, note, setNoten, noten) {

    const isExisting = noten.some((item) => item.fach === fach);
    if (!isExisting && note >= 1 && note <= 6) {

        if (note >= 5) {
            playSoundgood()
        }
        else if (note < 4) {
            playSoundbad()
        }
        var mynote = {
            id: id,
            fach: fach,
            note: note,
            geteilt: 1,
            Graphelist: [note]
        }
        id += 1
        console.log(mynote)
        console.log(noten)
        setNoten([...noten, mynote]);
    }


}