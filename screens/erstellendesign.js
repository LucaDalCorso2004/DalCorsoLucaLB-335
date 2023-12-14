import * as React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function CreateScreen({ }) {
    return (
        <View>
            <View>
                <TextInput id='title'
                    //  style={styles.login}
                    onChangeText={value => { setFaecher(value) }
                    }
                />
                <TextInput id='info'
                    // style={styles.login}
                    defaultValue="Description"
                    onChangeText={value => setNote(value)}
                />
                <Button //style={styles.button2} 
                    title='create' ></Button>


            </View>

        </View >
    );
}


