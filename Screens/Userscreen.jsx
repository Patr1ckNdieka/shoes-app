import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Userscreen = () => {
  return (
    <SafeAreaView>
 <View className="mt-20 h-[50%] w-[45%] bg-gray-400 rounded-full mx-auto">
    <Image
        source={{uri: 'https://i.pinimg.com/1200x/ce/19/ea/ce19eacf282ff3c4b8e0ccebb0a97668.jpg'}}
        style={{height: '100%', width: '100%', borderRadius: 100}}
    />
   </View>
   <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>User Name: Patrick.N</Text>

    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'condensedBold', marginTop: 5,marginLeft: 5}}>User Details

    </Text>
    </SafeAreaView>
  
  )
}

export default Userscreen

const styles = StyleSheet.create({})