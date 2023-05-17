import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-zinc-900 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-2xl text-center" >Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" translucent/>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
//   text: {
//     color: '#fff',
//     fontSize: 12,
//   }
// });
