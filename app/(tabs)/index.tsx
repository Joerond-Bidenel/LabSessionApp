
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import splash from "@/app/(tabs)/splash";
import docs from "@/app/(tabs)/docs";
//import help from "@/app/(tabs)/help";

import multipleChoice from "@/app/(tabs)/multipleChoice";

import question1 from "@/app/(tabs)/Questions/question1";
import question1_1 from "@/app/(tabs)/Questions/question1_1";
import question1_2 from "@/app/(tabs)/Questions/question1_2";

import question2 from "@/app/(tabs)/Questions/question2";
import question2_1 from "@/app/(tabs)/Questions/question2_1";
import question2_2 from "@/app/(tabs)/Questions/question2_2";

import question3 from "@/app/(tabs)/Questions/question3";
import question3_1 from "@/app/(tabs)/Questions/question3_1";
import question3_2 from "@/app/(tabs)/Questions/question3_2";

import question4 from "@/app/(tabs)/Questions/question4";
import question4_1 from "@/app/(tabs)/Questions/question4_1";
import question4_2 from "@/app/(tabs)/Questions/question4_2";


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

            <Stack.Screen name="question1" component={question1} options={{title:"question1"}} initialParams={{title:"question1"}}/>
            <Stack.Screen name="question1_1" component={question1_1} options={{title:"question1_1"}} initialParams={{title:"question1_1"}}/>
            <Stack.Screen name="question1_2" component={question1_2} options={{title:"question1_2"}} initialParams={{title:"question1_2"}}/>

            <Stack.Screen name="question2" component={question2} options={{title:"question2"}} initialParams={{title:"question2"}}/>
            <Stack.Screen name="question2_1" component={question2_1} options={{title:"question2_1"}} initialParams={{title:"question2_1"}}/>
            <Stack.Screen name="question2_2" component={question2_2} options={{title:"question2_2"}} initialParams={{title:"question2_2"}}/>

            <Stack.Screen name="question3" component={question3} options={{title:"question3"}} initialParams={{title:"question3"}}/>
            <Stack.Screen name="question3_1" component={question3_1} options={{title:"question3_1"}} initialParams={{title:"question3_1"}}/>
            <Stack.Screen name="question3_2" component={question3_2} options={{title:"question3_2"}} initialParams={{title:"question3_2"}}/>

            <Stack.Screen name="question4" component={question4} options={{title:"question4"}} initialParams={{title:"question4"}}/>
            <Stack.Screen name="question4_1" component={question4_1} options={{title:"question4_1"}} initialParams={{title:"question4_1"}}/>
            <Stack.Screen name="question4_2" component={question4_2} options={{title:"question4_2"}} initialParams={{title:"question4_2"}}/>

        </Stack.Navigator>
  )

};
