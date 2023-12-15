import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { addnote } from './componnets/erstellen';
import NoteEntry from './componnets/NoteEntry';
import { addnote2 } from './componnets/hinzufuegen';
import { deleteFach } from './componnets/deletefach';
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

  const noten = usenoten();
  const setNoten = useSetNoten();




  return (

    <NavigationContainer>
      <NoteContextWrapper>
        <Tab.Navigator>
          <Tab.Screen name="AnsichtScreen" component={AnsichtEntry} />
          <Tab.Screen name="DeleteScreen" component={deleteEntry} />
          <Tab.Screen name="Addscreen" component={AddEntry} />
          <Tab.Screen name="CreateScreen" component={CreateScreen} />
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

