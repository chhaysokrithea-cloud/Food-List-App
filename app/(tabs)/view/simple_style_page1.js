import {StyleSheet, Text, TextInput, View,} from 'react-native';
import React from 'react';

export default function LoginOnePage() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Welcome</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodytext}>Login Account</Text>
        <Text style={styles.text}> Help, you must login first to be able to use the application
        and enjoy its features.</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
        <button title='show password' style={styles.password}>Show Password</button>
        <button title='forgot password' style={styles.password}>Forgot Password?</button>
        <button title='sign in' style={styles.signin}>Sign In</button>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height:"100%",

},
signin:{
    backgroundColor:"#e04662",
    border:"none",
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    height:40,
    marginLeft:15,
    marginRight:15,
    marginTop:20,
    fontFamily:"monospace",
    borderRadius:10,
},
  password:{
    backgroundColor:"transparent",
    border:"none",
    color:"#e04662",
    fontSize:10,
    fontWeight:"bold",
    height:10,
    marginLeft:150,
    marginTop:10,
  },
  input:{
    borderColor:"#CCCCCC",
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginHorizontal:15,
  },
  text:{
    color:"#a4a2a2",
    opacity:1,
    fontFamily:"sans-serif",
    marginLeft:12,
  },
  header : {
    backgroundColor: '#CCCCCC',
    height:200,
    justifyContent:"center",
    alignItems:"center"

},
  headertitle:{
    fontSize:22,
    fontWeight:"bold",
    color:"white"
},
  body:{
  flex:1,
  backgroundColor:"white",
  gap:10,

},
  bodytext:{
    fontSize:22,
    fontFamily:"Arial",
    fontWeight:"bold",
    color:"black",
    marginTop:20,
    marginLeft:15,
    
},
  footer:{


},

});