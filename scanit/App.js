import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from './assets/logo.png'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ position: 'absolute', width: 235, height: 70, left: 70, top: 275}} resizeMode='contain' /> 

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ position: 'absolute',
              justifyContent: 'center',
                width: 290,
                height: 50,
                left: 42,
                top: 523,
                backgroundColor: '#5caebb'
        }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', margin: 'auto' }}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Bye, world!')}
        style={{ position: 'absolute',
                justifyContent: 'center',
                width: 290,
                height: 50,
                left: 42,
                top: 584,
                backgroundColor: '#5caebb'
        }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', margin: 'auto' }}>Sign up</Text>
      </TouchableOpacity>
    </View>
    
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
