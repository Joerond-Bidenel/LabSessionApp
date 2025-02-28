
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
        <Text style={styles.TextHeader}>Question 4 - Design UML for the Singleton Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            As usual, we'll start by adding some UML to the diagram.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML3.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>



          <Text style={styles.TextParagraph}>
            We'll add a new class called "BooksDatabase" to the diagram. This will be our Singleton.
            {"\n"}{"\n"}
            We add three methods to our singleton:{"\n"}
            > A private constructor. Only the singleton should be able to create a new "itself".{"\n"}

            > A getter method that acts as a constructor for any class using the singleton.{"\n"}

            > A method "getBook" that takes in nothing, and returns a String representing the data of a book (say in JSON or csv format).{"\n"}

            {"\n"}
            Finally, add a relationship between Library and the Singleton (assume Library is the only class that uses the singleton).

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

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question4_2', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

