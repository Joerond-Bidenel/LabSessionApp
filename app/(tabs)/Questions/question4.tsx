
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation, useRoute} from '@react-navigation/native';
import {FlatList} from "react-native-gesture-handler";

import styles from "@/app/style";
import Sidebar from "@/app/(tabs)/Sidebar";

export default function question1() {

  const navigation = useNavigation();
  const route = useRoute();
  return (

  <ScrollView style={styles.background}>

    {/*Header*/}
    <View style={styles.HeaderSectionRow}>

      <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
        <Text style={styles.buttonText}>&lt;- Back</Text>
      </TouchableOpacity>

      <Text style={styles.TextHeader}>SDM Lab Session: Singleton Pattern</Text>
    </View>


    {/* Main Content */}
    <View style={styles.mainBox}>

      {/*Sidebar*/}
      <Sidebar navigation={navigation} title={route.params.title}/>


      {/*Question Text*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 4 - Design and Implement the Singleton Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Singleton is, conceptually, one of the easiest patterns that is taught in SDM. However, that doesn't mean you shouldn't learn it, or that it doesn't have its uses. {"\n"}{"\n"}

            In fact, when I sat the "Advanced Database Systems" course after SDM and was asked to use the Singleton Pattern in a coursework, I found that though I knew exactly how it worked, I couldn't implement it from scratch!

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML3.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>



          <Text style={styles.TextParagraph}>

            Singleton has many uses. It allows us to have a single instance of something in the code. For example, you might want only a single class in the whole system that can read and write to a Database, or communicate with a server.
            {"\n"}{"\n"}

            It also allows you to have "Global State". This is sometimes considered bad practice in code, but can be really useful if well managed.
            {"\n"}{"\n"}
            Its third useful feature is Lazy Instantiation. Thanks to the structure of singleton, you never need to explicitly create it - and only call it when needed. Sometimes you never will, which can add efficiency to your code.
            However, this does mean singleton technically breaks the Single Responsibility principle. It manages its own creation, and its lifecycle/access!


          </Text>

          <Text style={styles.TextParagraph}>

            You might remember the "Gang of Four" - the group that came up with the first Design Patterns Book in the 80's.
            They later considered removing singleton as a pattern entirely! They don't say why, but it could be due to the existence of Global State, or how singleton breaks the Single Responsibiliy Principle!

          </Text>

          <Text style={styles.TextParagraph}>

            In this section, we'll have a look at adding the singleton pattern into the Library system - simulating a Database System that stores our books.

          </Text>



        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question4_1', {number: 5, name: "amongus"});}}>
        <Text style={styles.buttonText}>Start Question Four</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

