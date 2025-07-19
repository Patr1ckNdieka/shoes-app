import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Products = () => {
  return (
    <SafeAreaView >
   <View className="h-[65%] w-[98%] bg-black mt-10 rounded-2xl mx-auto">
   <Image
    style={{height: '50%', width: '40%', borderRadius: 20,left: '55%', top: '26%'}}
    source={{uri: 'https://i.pinimg.com/1200x/33/76/f1/3376f184c88c94ccd759df1f36e2a8a7.jpg'}}
   />
    
    <Image
    style={{height: '50%', width: '30%', borderRadius: 20, left: '5%',bottom: '30%'}}
      source={{uri: 'https://i.pinimg.com/736x/31/ae/a9/31aea9bb73dc4a92bd8584fbce4cd3a3.jpg'}}
    />
   </View>

   
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({})