import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../redux/slices/authSlice'

export default function UserPage() {
   const { isLogin, user } = useSelector((state) => state.auth);
   const {data} = user;
   const dispatch = useDispatch();

   return (
      <View style={styles.containerMain}>
         {data ? 
         <View>
            <View style={styles.containerFlex}>
               <Image style={styles.img} source={{uri: data["avatar"]}}/>
               <Text style={styles.author}>{data["first_name"] + " " + data["last_name"]}</Text>
               <Text style={styles.author}>{data["email"]}</Text>
            </View>
            <View style={styles.Button}>
               <Button
                  onPress={() => dispatch(setIsLogin(!isLogin))}
                  title="Logout"
                  color="#737373"
               />
            </View>
         </View>
         : <View><Text style={styles.author}>Loading</Text></View>}
      </View>
   );
}


const styles = StyleSheet.create({
containerMain: {
   height: "100%",
   width: "100%",
   backgroundColor: 'white',
   padding: 7,
},
containerFlex: {
   flexDirection: 'row',
   height: 600,
   width: "100%",
   backgroundColor: 'white',
},
img: {
   flex: 1.2,
   height: 100,
   width: 100,
   backgroundColor: '#fff',
},
author: {
   flex: 2,
   height: 20,
   marginLeft: 5,
   backgroundColor: 'white',
},
});