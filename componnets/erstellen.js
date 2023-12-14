import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
let id = 1;
export async function addnote(fach, note, setNoten, noten) {

    const isExisting = noten.some((item) => item.fach === fach);
    if (!isExisting) {
        var mynote = {
            id: id,
            fach: fach,
            note: note,
            geteilt: 1
        }
        id += 1
    }

    console.log(mynote)

    setNoten([...noten, mynote]);
    console.log(noten)
}