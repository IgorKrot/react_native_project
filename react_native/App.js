import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from "./screens/Home"

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaProvider>
            <Home />
         </SafeAreaProvider>
      </Provider>   
   );
}
