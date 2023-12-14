import { Audio } from 'expo-av';

export function ComponentDidMountalarm() {
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
    this.sound.loadAsync(require('../assets/alarm.mp3'), status, false)
    this.sound.playAsync()
}

