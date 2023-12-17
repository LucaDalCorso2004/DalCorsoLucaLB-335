import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { AsyncStorage } from "react-native";
import AnsichtEntry from './screens/Ansicht'
import deleteEntry from './screens/deleteanischt'
import AddEntry from './screens/ansichtadd'
import CreateScreen from './screens/erstellendesign'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { usenoten, useSetNoten } from "./Notencontext";
import NoteContextWrapper from "./Notencontext";

const Tab = createBottomTabNavigator();

export default function App() {






  return (

    <NavigationContainer>
      <NoteContextWrapper>
        <Tab.Navigator>
          <Tab.Screen name="Ansicht" component={AnsichtEntry} />
          <Tab.Screen name="Löschen" component={deleteEntry} />
          <Tab.Screen name="Hinzufügen" component={AddEntry} />
          <Tab.Screen name="Erstellen" component={CreateScreen} />
        </Tab.Navigator>
      </NoteContextWrapper>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

