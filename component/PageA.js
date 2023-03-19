import {StyleSheet, Text, View, Pressable, FlatList,StatusBar} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/data';

const elementByColumn = 2;

export default function PageA({navigation}) {
  return (
   <View style={styles.container}>
    <FlatList
      numColumns={elementByColumn}



      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: item.color,
            height: 150,
            borderRadius: 10,
            width: '45%',
            flexDirection: 'row',
            justifyContent:'center',
            alignItems:'center',
            margin:15,
            flex: 1
          }}>
          <Pressable onPress={() => navigation.navigate('PageB',{id: item.id})}>
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        </View>
      )}
    />
    </View> 
  );
}

// <View>
//   <View style={styles.ligne}>
//     <View style={styles.ligne}>
//       <View>
//         <Pressable onPress={() => navigation.navigate('PageA')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg2]}>TEST</Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <Pressable onPress={() => navigation.navigate('PageB')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg]}>Titre 2</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   </View>

//   <View style={styles.ligne}>
//     <View style={styles.ligne}>
//       <View>
//         <Pressable onPress={() => navigation.navigate('PageA')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg1]}>Titre 1</Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <Pressable onPress={() => navigation.navigate('PageB')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg2]}>Titre 2</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   </View>
//   <View style={styles.ligne}>
//     <View style={styles.ligne}>
//       <View>
//         <Pressable onPress={() => navigation.navigate('PageA')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg3]}>Titre 1</Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <Pressable onPress={() => navigation.navigate('PageB')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg4]}>Titre 2</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   </View>
//   <View style={styles.ligne}>
//     <View style={styles.ligne}>
//       <View>
//         <Pressable onPress={() => navigation.navigate('PageA')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg5]}>Titre 1</Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <Pressable onPress={() => navigation.navigate('PageB')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg6]}>Titre 2</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   </View>
//   <View style={styles.ligne}>
//     <View style={styles.ligne}>
//       <View>
//         <Pressable onPress={() => navigation.navigate('PageA')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg1]}>
//               Titre 11
//             </Text>
//           </View>
//         </Pressable>
//       </View>

//       <View>
//         <Pressable onPress={() => navigation.navigate('PageB')}>
//           <View>
//             <Text style={[styles.titleContainer, styles.bg3]}>
//               Titre 22
//             </Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   </View>
// </View>

const styles = StyleSheet.create({
  container: { flex: 1,
    marginTop: StatusBar.currentHeight || 0,},
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  ligne: {},
  bg: {
    backgroundColor: 'green',
  },
  bg1: {
    backgroundColor: '#8a2be2',
  },
  bg2: {
    backgroundColor: '#7fff00',
  },
  bg3: {
    backgroundColor: '#6495ed',
  },
  bg4: {
    backgroundColor: '#00008b',
  },
  bg5: {
    backgroundColor: '#7fffd4',
  },
  bg6: {
    backgroundColor: '#7fffd4',
  },
  title: {
    fontSize: 25,
    color: 'black',
    width: '100%',
    height: '100%',
  },
});
