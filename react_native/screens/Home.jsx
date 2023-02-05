import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Auth from "./Auth"
import Pictures from "./Pictures"

const Tab = createMaterialTopTabNavigator();

export default function Home() {
   const { isLogin } = useSelector((state) => state.auth);
   const insets = useSafeAreaInsets();
   return (
      <NavigationContainer>
         <Tab.Navigator style={{marginTop: insets.top}}>
            <Tab.Screen name="Pictures" component={Pictures} />
            <Tab.Screen name={isLogin ? "Account" : "Auth"} component={Auth} />
         </Tab.Navigator>  
      </NavigationContainer> 
   );
}
