
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
        <Text style={styles.TextHeader}>Question 4 - Implement code for the Singleton Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Next, we'll write the code to add the singleton into the system.
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLQuestionFourChanges.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>


          <Text style={styles.TextParagraph}>
            For this task, you'll need to:{"\n"}{"\n"}

            >	Add the new “BooksDatabase” Class into the "org.example" directory{"\n"}{"\n"}

            > Add a private ArrayList of String" called "books" {"\n"}{"\n"}

            > Add a private static BooksDatabase variable called "instance" {"\n"}{"\n"}

          </Text>


          <Text style={styles.TextParagraph}>

            > Add a private constructor. In it, you should: {"\n"}{"\n"}

            --> Open the "database.csv" file. For this task we will hardcode the path - right-click and select "copy absolute path".

            --> read each line - assume they are separated by a comma - and store them in the "books" arraylist.

          </Text>




          <Text style={styles.TextParagraph}>

            > Add the public static "getInstance" method: {"\n"}{"\n"}

            --> If the "instance" variable is null, then this should create and store a new BooksDatabase in it, then return the new instance.{"\n"}{"\n"}

            --> If the "instance" variable is not null, then return the stored instance.{"\n"}{"\n"}

          </Text>

          <Text style={styles.TextParagraph}>

            > Add the "getBook" method. In it, remove and return the first entry in the arraylist (index = 0) if possible.

          </Text>


        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 6, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

