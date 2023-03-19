import {StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {MEALS} from '../data/data';

export default function PageB({navigation, route}) {
  const id = route.params.id;
  const recettes = MEALS.filter(recette => recette.categoryIds.includes(id));

  // const userFirstName = route.params.firstName
  // const userLastName = route.params.lastName
  // const userPhone = route.params.phone
  return (
    <View style={styles.container}>
      <FlatList
        data={recettes}
        renderItem={({item}) => (
          <View style ={styles.shadowProp}>
            <Pressable
              onPress={() => navigation.navigate('PageC', {id: item.id})}>
                <View style= {{ justifyContent:'center', alignItems:'center'}}>
                <Image source={{uri:item.imageUrl}}
                style={{width:'80%', height: 150, borderTopRightRadius:10, borderTopLeftRadius:10, marginTop: 30}}/>
                <View style={{backgroundColor:'white', padding:20, width:'80%', borderBottomEndRadius: 15, borderBottomLeftRadius: 15}}>
                <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight:'bold',
                  color: 'black'
                }}>
                {item.title}
              </Text>
              
             <Text style ={{color:'black', textAlign:'center'}}>{item.complexity} {item.duration} min</Text></View>
                </View>
               
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    // backgroundColor:'black'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});
