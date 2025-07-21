import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Products = () => {
  return (
    <SafeAreaView >
   <View className="h-[35%] w-[98%] bg-black mt-10 rounded-2xl mx-auto">
   <Image
    style={{height: '50%', width: '40%', borderRadius: 20,left: '55%', top: '26%'}}
    source={{uri: 'https://i.pinimg.com/1200x/33/76/f1/3376f184c88c94ccd759df1f36e2a8a7.jpg'}}
   />
    
    <Image
    style={{height: '50%', width: '30%', borderRadius: 20, left: '5%',bottom: '30%'}}
      source={{uri: 'https://i.pinimg.com/736x/31/ae/a9/31aea9bb73dc4a92bd8584fbce4cd3a3.jpg'}}
    />
   </View>
   <Text style={{marginTop: '10', fontStyle:'sans-serif'}}>Products</Text>
    <View>
      <Pressable>
        <Text style={{color: 'orange', fontSize: 15,left:'75%',bottom:'90%'}}>View More</Text>
      </Pressable>
    </View>

    <View className="flex-row justify-between ">
    <View className="h-[35%] w-[75%] bg-black  rounded-2xl mx-2">
      <Image
        source={{uri: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'}}
        style={{height: '80%', width: '40%', borderRadius: 20 ,left: '5%', top: '10%'}}
      />
      <Text style={{color: 'white', fontSize: 20,left:'56%',bottom:'60%'}}>Nike</Text>
      <Pressable>
        <Text style={{color: 'orange', fontSize: 15,left:'56%',bottom:'220%'}}>View More</Text>
      </Pressable>
    </View>

    <View className="h-[35%] w-[75%] bg-black  rounded-2xl mx-2">
      <Image
        source={{uri: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'}}
        style={{height: '80%', width: '40%', borderRadius: 20 ,left: '5%', top: '10%'}}
      />
      <Text style={{color: 'white', fontSize: 20,left:'56%',bottom:'60%'}}>Nike</Text>
      <Pressable>
        <Text style={{color: 'orange', fontSize: 15,left:'56%',bottom:'220%'}}>View More</Text>
      </Pressable>
    </View>

    <View className="h-[35%] w-[75%] bg-black  rounded-2xl mx-2">
      <Image
        source={{uri: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'}}
        style={{height: '80%', width: '40%', borderRadius: 20 ,left: '5%', top: '10%'}}
      />
      <Text style={{color: 'white', fontSize: 20,left:'56%',bottom:'60%'}}>Nike</Text>
      <Pressable>
        <Text style={{color: 'orange', fontSize: 15,left:'56%',bottom:'220%'}}>View More</Text>
      </Pressable>
    </View>
  </View>

  <View className="flex-row flex-column justify-between" style={{bottom: '20%'}}>
<View className="h-40 w-[35%] bg-black  rounded-2xl mx-2">
<Pressable>
<Image 
  source={{uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'}}
  style={{height: '70%', width: '90%', borderRadius: 10 ,left: '5%', top: '5%'}}
/>
<Text style={{color: 'white', fontSize: 12,left:'5%',top:'10%'}}>Grey Nike Jordan 1</Text>
<Text style={{color: 'orange', fontSize: 12,left:'5%',top:'10%'}}>KSH.8500</Text>
</Pressable>

</View>
<View className="h-40 w-[35%] bg-black  rounded-2xl mx-2">
<Pressable>
<Image 
  source={{uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'}}
  style={{height: '70%', width: '90%', borderRadius: 10 ,left: '5%', top: '5%'}}
/>
<Text style={{color: 'white', fontSize: 12,left:'5%',top:'10%'}}>Grey Nike Jordan 1</Text>
<Text style={{color: 'orange', fontSize: 12,left:'5%',top:'10%'}}>KSH.8500</Text>
</Pressable>

</View>
<View className="h-40 w-[35%] bg-black  rounded-2xl mx-2">
<Pressable>
<Image 
  source={{uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'}}
  style={{height: '70%', width: '90%', borderRadius: 10 ,left: '5%', top: '5%'}}
/>
<Text style={{color: 'white', fontSize: 12,left:'5%',top:'10%'}}>Grey Nike Jordan 1</Text>
<Text style={{color: 'orange', fontSize: 12,left:'5%',top:'10%'}}>KSH.8500</Text>
</Pressable>

</View>
<View className="h-40 w-[35%] bg-black  rounded-2xl mx-2">
<Pressable>
<Image 
  source={{uri: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'}}
  style={{height: '70%', width: '90%', borderRadius: 10 ,left: '5%', top: '5%'}}
/>
<Text style={{color: 'white', fontSize: 12,left:'5%',top:'10%'}}>Grey Nike Jordan 1</Text>
<Text style={{color: 'orange', fontSize: 12,left:'5%',top:'10%'}}>KSH.8500</Text>
</Pressable>

</View>
  </View>
    
   
    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({})