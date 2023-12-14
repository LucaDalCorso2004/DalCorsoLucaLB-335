import React, { Component, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { ComponentDidMountclap } from './clapaudio'
import { ComponentDidMountalarm } from './alarmaudio'




let geteilt = 1;
export async function addnote2(fach, note, setNoten, noten) {

    setNoten([...noten].map(el => {
        console.log(el.fach)
        console.log(fach)
        if (el.fach === fach && note > 0 && note < 7) {

            if (note < 4) {
                alert("alarm Alarm")
                ComponentDidMountalarm()
            }
            else if (note >= 5) {
                alert("appplaus")
                ComponentDidMountclap()
            }
            el.note = el.geteilt * el.note + note;
            el.geteilt += 1
            console.log(el.note);


            console.log(el.geteilt);

            el.note = el.note / el.geteilt;
            (el.note).toFixed(2)
            console.log(el.note);

            console.log(el.geteilt);


            return el;
        }


        return el;

    }));
}