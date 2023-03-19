import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from './component/PageA'
import PageB from './component/PageB'
import PageC from './component/PageC'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='PageA'>
                <Stack.Screen name="All categories" component={PageA} options={[{headerShown : true}, {title : "All categories"}]}/>
                <Stack.Screen name="PageB" component={PageB} options={{title : "Meals Overwiew"}}/>
                <Stack.Screen name="PageC" component={PageC} options={{title : "About the meal"}} />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})