import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './Screens/Splashscreen';
import Orderscreen from './Screens/Orderscreen';
import Products from './Screens/Products';
import Userscreen from './Screens/Userscreen';

export default function App() {
  return (
    <View >
    <Userscreen/>
    {/* <Products/> */}
    {/* <Orderscreen/> */}
    {/* <Splashscreen /> */}
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
