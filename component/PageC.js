import { Pressable, StyleSheet, Text, View, Image, SectionList } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'

export default function PageC({navigation, route}) {
  const idRecette = route.params.id
  const recette = MEALS.find((recette)=>recette.id === idRecette)
  return (
    <View>
      {/* <Text>PageC</Text> */}
      <Pressable onPress={() => navigation.navigate("PageA")}>
          <View>
          <Image source={{uri:recette.imageUrl}}
                style={{width:'100%', height:'70%', borderTopRightRadius:10, borderTopLeftRadius:10, marginTop: 30}}/>
            <Text style={{fontSize:20, fontWeight:'bolder', color:'black', textAlign:'center'}}>{recette.title}</Text>
            <Text  style={{fontSize:15, fontWeight:'bolder', color:'black', textAlign:'center'}}>{recette.duration}min {recette.complexity} </Text>
          </View>
          <View><Text  style ={{color:'#E1B497', textAlign:'center', fontSize: 20}}>Ingredients</Text>
          <View
  style={{
    borderBottomColor: '#E1B497',
    borderBottomWidth: 5,
    
    justifyContent:'center'
  
  }}
/>

{/* <View><Text  style ={{color:'#E1B497', textAlign:'center', fontSize: 20}}>{recette.ingredients}</Text></View> */}



{/* <Text>{recette.ingredients}</Text> */}
</View>

    
      </Pressable>
      {/* <Button title="retour"/> */}
    </View>
  )
}

const styles = StyleSheet.create({})