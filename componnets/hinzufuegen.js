import React, { Component, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { playSoundgood } from './clapaudio'
import { playSoundbad } from './alarmaudio'

import { Graphe } from './Graphe';




let geteilt = 1;
export async function addnote2(fach, note, setNoten, noten) {

    setNoten([...noten].map(el => {
        console.log(el.fach)
        console.log(fach)
        if (el.fach === fach && note > 0 && note < 7) {

            if (note >= 5) {
                playSoundgood()
            }
            else if (note < 4) {
                playSoundbad()
            }

            el.note = el.geteilt * el.note + note;
            el.geteilt += 1
            console.log(el.note);


            console.log(el.geteilt);

            el.note = el.note / el.geteilt;
            (el.note).toFixed(2)
            console.log(el.note);

            console.log(el.geteilt);
            el.Graphelist.push(el.note);

            console.log(el.Graphelist)

            return el;
        }


        return el;

    }));
}