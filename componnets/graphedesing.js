import { View, Text, Button, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
export function GrapheEntry({ data, nam }) {
    return (

        <View style={styles.container}>
            <View>
                <Text>{nam}</Text>
            </View>
            <LineChart data={data} />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
});