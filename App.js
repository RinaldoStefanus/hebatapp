/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

const styles = require('./styles.js');

export default class App extends Component<Props> {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyC-lHmdO1h_AIWhrIYg3b2ieenyrHCsz-A",
      authDomain: "sahabat24app.firebaseapp.com",
      databaseURL: "https://sahabat24app.firebaseio.com",
      projectId: "sahabat24app",
      storageBucket: "sahabat24app.appspot.com",
      messagingSenderId: "191231548803"
  };
  firebase.initializeApp(config);
  // console.log(firebase)
//   firebase.database().ref('User/0002').set(
//     {
//       name:'asoy',
//       age:'25'
//     }
//   ).then(()=>{console.log('INSERTED !');
//   }).catch((error)=>{
//   console.log(error);
// });
firebase.database().ref('User').once('value', (data)=>{
  console.log(data.toJSON());
})

firebase.database().ref('User/0001/age').remove();
  }

  render() {
    return (
      <View style={styles.container}>
  <Text> im container lol! </Text>
      </View>
    );
  }
}
