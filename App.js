import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image,StyleSheet, Text, View, SafeAreaView, TextInput,Button,TouchableOpacity,CheckBox} from 'react-native';
import netflix from './assets/netflix.png'; 
//import facebook from './assets/facebook.png'
//import FlatButton from '../Netflix3/button';

export default function App() {
  const rumeysa = false;
  const onPress= () => console.log('tıklandı')
  const [isSelected, setSelection] = useState(false);
  //const windowWidth = Dimensions.get('window').width;
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
    
     
    <View style={{backgroundColor:'black', flex:62}} >
      <TextInput style={styles.input1} placeholder='Email or phone number' placeholderTextColor='#98999c'>
      </TextInput>
      <TextInput style={styles.input2} placeholder='Password' placeholderTextColor='#98999c'> 
      </TextInput>
     
      <TouchableOpacity
        style={styles.button}
        onPress={onPress} textAlign='center'
      >
        <Text style={styles.textFont} >Sign In</Text>
      </TouchableOpacity>
     
      <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember Me</Text>
      </View>
      <TouchableOpacity>
                <Text
                  style={
                    styles.need
                  }>
                  Need help?
                </Text>
              </TouchableOpacity>
    </View>
    <Image
                source={require('./assets/facebook.png')}
                style={styles.facebookLogo}
              />
              <Text style={{fontSize: 15, color: '#727272', marginLeft:50, marginTop:-20,marginBottom:20}}>
                Login with Facebook
              </Text>
      
     
    </View>
    
    <View style={{backgroundColor:'black', flex:18}} >

    <Text style={{fontSize: 17, color: '#727272', marginLeft:20}}>
                New to Netflix?
              </Text>
              <TouchableOpacity>
                <Text style={{fontSize: 17, color: 'white', marginLeft:140,marginTop:-25,marginBottom:-10}}> Sign up now.</Text>
              </TouchableOpacity>
    </View>
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
  button:{
    backgroundColor:'#e81515',
    width:320,
    height:15,
     margin:19,
    borderRadius:4,
    padding:25,
    textAlign:'center',
    
    
   // position:'absolute'
  },
  textFont:{
    color:'white',
    
    fontSize:25,
    marginBottom:12,
  
    textAlign:'center',
    justifyContent:'center'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 90,
    marginLeft:10,
    marginTop:-50
  },
  checkbox: {
   // alignSelf: "center",
   marginRight:1,
   borderColor: 'gray'
   //backgroundColor:'grey'    
  },
  label: {
    margin: 8,
    color:'#a1a1a1',
  },
  need:{
    fontSize: 14,
    color: '#a1a1a1',
    marginLeft: 267,
    marginTop:-116               
                               
  },
  facebookLogo:{
    height: 20,
    width: 20,
    marginRight:1,
    marginLeft:  20,
    

  }
  
 

});
