import { View, Text, Button, StyleSheet } from 'react-native';
export function FachEntry({ title }) {
    return (
        <View >
            <Text>{title}</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'baseline',
    },
});
