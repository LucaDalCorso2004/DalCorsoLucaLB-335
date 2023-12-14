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
import NoteContextWrapper from "./Notencontext";

const Tab = createBottomTabNavigator();

export default function App() {
  // create a function that saves your data asyncronously



  const [noten, setNoten] = useState([]);
  const [fach, setFaecher] = useState('');
  const [note, setNote] = useState('');
  const [fach2, setFaecher2] = useState('');
  const [note2, setNote2] = useState('');
  const [fach3, setFaecher3] = useState('');
  // fetch the data back asyncronously



  const buttonPress = () => {
    parseInt(note)
    addnote(fach, note, setNoten, noten);

  };

  const deletePress = () => {
    deleteFach(setNoten, noten, fach3);
  };

  const Pressbutton = () => {
    let intnote = parseInt(note2)
    addnote2(fach2, intnote, setNoten, noten)

  }

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

