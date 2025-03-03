
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
            As before, we'll start by adding some UML to the diagram.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLQuestionTwo.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>



          <Text style={styles.TextParagraph}>
            We'll add a new class called "BooksDatabase" to the diagram. This will be our Singleton.
            {"\n"}{"\n"}

            We add two variables to our singleton: {"\n"}
            > A private static "instance" which stores an instance of the singleton{"\n"}
            > A private ArrayList books, storing a list of books from a file{"\n"}{"\n"}

            We then add three methods to our singleton:{"\n"}
            > A private constructor. Only the singleton should be able to create a new "itself".{"\n"}

            > A static getter method "getInstance" that acts as a "constructor" for any class that wants to use the singleton; returning the instance of BooksDatabase that the singleton manages{"\n"}

            > A method "getBook" that takes in no parameters and returns a String representing a book from a file (say in JSON or csv format).{"\n"}

            {"\n"}
            Finally, add a relationship between Library and the Singleton (assuming Library is the only class that uses the singleton).

          </Text>

          <Text style={styles.TextParagraph}>
            Once you’ve made changes to the UML, move on to the next page. This will contain a diagram with the answers, and why we have made certain decisions.
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('answers4_1', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Get Answers</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

