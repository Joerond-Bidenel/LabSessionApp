
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
        <Text style={styles.TextHeader}>Question 3 - Design UML for the Singleton Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>

            The parts in RED are those we have added for this question.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLQuestionFourChanges.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>



          <Text style={styles.TextParagraph}>

            We've added a new class called "BooksDatabase".{"\n"}{"\n"}

            The method "BooksDatabase()" is a private (denoted by the "-" sign) constructor. This means that no class can create a new instance of the singleton.{"\n"}{"\n"}

            The public method "getInstance()" acts as a constructor. This is a static method, denoted by the underline, allowing it to be called without an instance of the BooksDatabase being instantiated.{"\n"}
            When called, it will either return a stored instance or create and store one if none exists. This lets the singleton decide how many instances there are.{"\n"}{"\n"}


            The "instance" variable is private static, and stores a BooksDatabase. This is the global instance provided by the singleton! It needs to be static so the static method can store the instance in it. {"\n"}

            The "books" arrayList is simply a private variable.
            {"\n"}{"\n"}


            The "getBook" method is simply a public method returning a String.
            {"\n"}{"\n"}

            Notice the association with itself. This shows us that one of our methods is self referential - in this case, that the static getInstance method calls the constructor.
            {"\n"}{"\n"}

            There is a dependency between Library and BooksDatabase. This could easily be an association, but we are going to assume that Library doesn't store the singleton in a variable.

          </Text>

          <Text style={styles.TextParagraph}>
            Move on to the next question once you are happy with your answer!
          </Text>


        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question4_2', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

