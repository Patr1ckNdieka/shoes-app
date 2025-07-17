import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
   <SafeAreaView>
    <ImageBackground style={{height: '100%', width: '100%'}} 
  
    source={{
        uri: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg',
    }}>
        <View style={{height: '30%', width: '30%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(56, 54, 54, 0.5)', borderRadius: 20, marginTop: '50%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Welcome to Shoes App</Text>
        </View>
    </ImageBackground>
   </SafeAreaView>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})