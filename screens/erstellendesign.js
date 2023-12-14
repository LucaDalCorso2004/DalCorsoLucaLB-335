import * as React from 'react'
import { View, TextInput, Button, Text } from 'react-native-web';

export default function adddesign({ navigation }) {
    return (
        <View>
            <View>
                <TextInput id='title'
                    style={styles.login}
                    onChangeText={value => { setFaecher(value) }
                    }
                />
                <TextInput id='info'
                    style={styles.login}
                    defaultValue="Description"
                    onChangeText={value => setNote(value)}
                />
                <Button style={styles.button2} title='create' onPress={buttonPress}></Button>


            </View>
            <Text onPress={() => navigation.navigate('home')}></Text>
        </View >
    );
}


