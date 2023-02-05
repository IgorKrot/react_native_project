import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setIsLogin, getAuth } from '../redux/slices/authSlice'
import { validateEmail } from "../features/validateEmail"
import UserPage from "../components/UserPage"

export default function Auth() {
   const { isLogin } = useSelector((state) => state.auth);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState({emailError: "", passwordError: "",});
   const dispatch = useDispatch();

   function checkInputs (email, password) {
      if (!email) {
         setError({...error, emailError: "Please, enter email"});
         setEmail("")} else
      if (!password) {
         setError({...error, passwordError: "Please, enter password"});
         setPassword("");} else
      if (password.length < 8) {
         setError({...error, passwordError: "Enter pass more 8 symbols"});
         setPassword("");} else 
      if (!validateEmail(email)) {
         setError({...error, emailError: "Enter email like a test@gmail.com"});
         setEmail("");
      } else {
         setError({emailError: "", passwordError: "",})
         return true
      }
}

   function Login () {
      if(checkInputs(email, password)) {
         dispatch(setIsLogin(true))
      } else {}
   }

   useEffect(() => {
      dispatch(getAuth());
   }, []);

   return (
      <View style={styles.container}>
         {!isLogin ? <View>   
                        <TextInput
                           style={styles.input}
                           placeholder={error.emailError ? error.emailError : "Email"}
                           onChangeText={setEmail}
                           value={email}
                        />
                        <TextInput
                           style={styles.input}
                           placeholder={error.passwordError ? error.passwordError : "Password"}
                           onChangeText={setPassword}
                           type="password"
                           value={password}
                        />
                        <View style={styles.button}>
                           <Button
                           onPress={Login}
                           title="Login"
                           color="#737373"
                           />
                        </View>
                     </View>
         : <UserPage />}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   input: {
      width: 350,
      height: 55,
      backgroundColor: 'white',
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
   },
   });