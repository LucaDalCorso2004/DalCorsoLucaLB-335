import { View, Text, Button, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
export function GrapheEntry({ data }) {
    return (
        <View style={styles.container}>
            <LineChart data={data} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',  // Hintergrundfarbe
        padding: 16,  // Innenabstand
        marginVertical: 8,  // Vertikaler Außenabstand
        borderRadius: 8,  // Abgerundete Ecken
        borderWidth: 1,  // Randbreite
        borderColor: '#dddddd',  // Randfarbe
    },
});