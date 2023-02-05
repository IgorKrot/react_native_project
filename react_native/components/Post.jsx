import { StyleSheet, Text, View, Image } from 'react-native';

export default function Post({author, img}) {
   return (
      <View style={styles.container}>
         <Image style={styles.img} source={{uri: img}}/>
         <Text style={styles.author}>{author}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
container: {
   height: 250,
   width: "100%",
   backgroundColor: 'white',
},
img: {
   flex: 1,
   height: 200,
   width: 380,
   borderRadius: 5,
},
author: {
   height: 20,
},
});