
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import splash from "@/app/(tabs)/splash";
import docs from "@/app/(tabs)/docs";
//import help from "@/app/(tabs)/help";

import multipleChoice from "@/app/(tabs)/multipleChoice";

import question1 from "@/app/(tabs)/question1";
//import question1_1 from "@/app/(tabs)/question1_1";
//import question1_2 from "@/app/(tabs)/question1_2";
//import question1_3 from "@/app/(tabs)/question1_3";


const Stack = createNativeStackNavigator()


export default function index() {
  return (
        <Stack.Navigator

            initialRouteName="splash"
            screenOptions={{
          contentStyle: {
            backgroundColor: "black",

          },
          headerStyle: {
            backgroundColor: 'black',
            headerBackVisible: false,
          }
        }}>

          <Stack.Screen name="splash" component={splash} initialParams={{number: 1}} options={{title:"Lab Session"}} />
            <Stack.Screen name="docs" component={docs} options={{title:"documentation"}}/>
            <Stack.Screen name="multipleChoice" component={multipleChoice} initialParams={{number: 1}} options={{title:"multichoice question"}} />


            <Stack.Screen name="question1" component={question1} options={{title:"Question1"}}/>
                {/*<Stack.Screen name="question1_1" component={question1_1} options={{title:"question1"}}/>*/}


        </Stack.Navigator>
  )

};
