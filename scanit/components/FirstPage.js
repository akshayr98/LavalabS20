import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Button } from 'react-native';

import logo from '.././assets/logo.png';

export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={logo} style={{ position: 'absolute', width: 235, height: 70, left: 70, top: 275}} resizeMode='contain' />

      <TouchableOpacity
         onPress={
          () => this.props.navigation.navigate( 'LoginPage', {
            username: 'Bill'
          } )
        }
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
        onPress={() => this.props.navigation.navigate( 'signupPage', {

        })
        }
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
