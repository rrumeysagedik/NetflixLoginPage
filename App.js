import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View, SafeAreaView, TextInput,Button } from 'react-native';
import netflix from './assets/netflix.png'; 

export default function App() {
  const rumeysa = false;
  return rumeysa ? (
  <SafeAreaView style={{flex:1, backgroundColor:'#000', paddingLeft:50}}> 
    <View style={styles.container, {flex:0.1}}>

      <StatusBar style="auto" />
    </View>
    
    </SafeAreaView>
  ) : <View style={{ backgroundColor:'yellow', flex:1 }} >
    <View style={{backgroundColor:'black', flex:35}} >

    <Image  source={netflix} style={{ width: 200, height: 100, marginLeft:0, marginTop:50,marginBottom:10}} /> 
    <Text style={[styles.setFontSize,styles.setColorWhite,styles.setFontLocation]}>Sign In</Text> 
    </View>
    <View style={{backgroundColor:'black', flex:60}} >
      <TextInput style={styles.input1} placeholder='Email or phone number' placeholderTextColor='#98999c'>
      </TextInput>
      <TextInput style={styles.input2} placeholder='Password' placeholderTextColor='#98999c'> 
      </TextInput>
     <View>
       <Button title='Button'></Button>
     </View>
    </View>
    
    <View style={{backgroundColor:'blue', flex:20}} ></View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   alignItems: 'baseline',
    position:'relative',
    flexWrap:'nowrap',
   justifyContent: 'center',
  },
  setFontSize:{

    fontSize:30,
    fontWeight:'bold',
    
    //backgroundColor:'white'
  },
  setColorWhite:{
    color:'white'
  },
  setFontLocation:{
    //flex:0.6,

    alignItems:'center',
    justifyContent:'center',
  marginLeft:20

  },
  input1:{
    borderWidth:1,
    borderColor:'#444547',
    padding:10,
    margin:15,
    width:320,
    borderRadius:3,
    backgroundColor:'#444547',
    marginTop:4,
    marginLeft:20,
    marginRight:20,
   paddingLeft: 18
  },
  input2:{
    borderWidth:1,
    borderColor:'#444547',
    padding:10,
    margin:15,
    width:320,
    borderRadius:3,
    backgroundColor:'#444547',
    marginTop:1,
    marginLeft:20,
    marginRight:20,
    paddingLeft: 18
  },
  

});
