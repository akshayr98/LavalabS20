import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';

import logo from '.././assets/logo.png';

export default class signupPage extends React.Component {
  state = {
    text: '',
    name: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  };
  render() {
    return (
      <View style={styles.container}>
      <Image source={logo} style={{ position: 'absolute', width: 235, height: 70, left: 70, top: 209}} resizeMode='contain' />


      <TextInput
        style={styles.name}
        label='name'
        Placeholder='Full Name'
        PlaceholderTextColor="#7D7D7D"
        value={this.state.name}
        onChangeText={name => this.setState({ name })}
      />
      <TextInput
        style={styles.username}
        label='username'
        Placeholder='Username'
        value={this.state.username}
        onChangeText={username => this.setState({ username })}
      />
      <TextInput
        style={styles.password}
        label='password'
        Placeholder='Password'
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
      />
      <TextInput
        style={styles.passwordConfirmation}
        label='passwordConfirmation'
        Placeholder='Password confirmation'
        secureTextEntry={true}
        value={this.state.passwordConfirmation}
        onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
      />

      <TouchableOpacity
        style={styles.submit}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', margin: 'auto' }}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    width: 290,
    height: 50,
    left: 43,
    top: 380,

    textAlign: 'center'
  },
  username: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    width: 290,
    height: 50,
    left: 43,
    top: 440,

    textAlign: 'center'
  },
  password: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    width: 290,
    height: 50,
    left: 43,
    top: 500,

    textAlign: 'center'
  },
  passwordConfirmation: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    width: 290,
    height: 50,
    left: 43,
    top: 560,

    textAlign: 'center'
  },
  submit: {
    backgroundColor: '#5caebb',
    justifyContent: 'center',
    position: 'absolute',
    width: 290,
    height: 50,
    left: 43,
    top: 620,
  }
});
