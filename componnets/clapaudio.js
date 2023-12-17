import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
// https://docs.expo.dev/versions/latest/sdk/audio/
export async function playSoundgood() {
    try {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/claps.mp3')
        );

        console.log('Playing Sound');
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.positionMillis >= 5000) {
                // Stop playback after 5 seconds
                sound.stopAsync();
            }
        });
    } catch (error) {
        console.error('Error playing sound', error);
    }
}
export default function App() {
    const [sound, setSound] = React.useState();



    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);


}


