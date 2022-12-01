import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base'
import AppNavigator from './navigation/AppNavigator';



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NativeBaseProvider >
          <AppNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});
