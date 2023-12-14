import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react'
import { View, TextInput, Button, Text } from 'react-native-web';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Delete" component={DeleteScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Show" component={ShowScreen} />

        </Tab.Navigator>
    );
}