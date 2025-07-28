import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Orderscreen = ({navigation}) => {
  return (
    <SafeAreaView>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Order Screen</Text>
        <Text style={{fontSize: 16, color: 'gray'}}>Your orders will be displayed here.</Text>
    </View>
    </SafeAreaView>
    
  )
}

export default Orderscreen

const styles = StyleSheet.create({})