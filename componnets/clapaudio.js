import { Audio } from 'expo-av';
import React from 'react';

export function ComponentDidMountclap() {
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,

        playsInSilentModeIOS: true,

        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playsThroughtEarpieceAndroid: true
    });
    this.sound = new Audio.Sound();

    const status = {
        shouldPlay: false
    }

    this.sound.loadAsync(require('../assets/claps.mp3'), status, false)
    this.sound.playAsync()
}
