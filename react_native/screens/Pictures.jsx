import { FlatList, StyleSheet, View, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPictures } from '../redux/slices/picturesSlice'
import Post from "../components/Post"

export default function Pictures() {
   const { pictures, isLoading, numberPictures } = useSelector((state) => state.pictures);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchPictures(numberPictures));
   }, []);


   return (
      <View style={styles.container}>
         {isLoading ? <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" />
         </View>
         : 
         <FlatList
            keyExtractor={i => i.id}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => {dispatch(fetchPictures(numberPictures))}} />}
            data={pictures}
            renderItem={({item}) => (
               <TouchableOpacity>
                  <Post author={item.author} img={item.download_url} />
               </TouchableOpacity>)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {dispatch(fetchPictures(numberPictures + 3))}}
         />}
      </View>
   );
}

const styles = StyleSheet.create({
container: {
   flex: 1,
   marginTop: 5,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
},
});
