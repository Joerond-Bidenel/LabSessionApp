
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

export default function question1_1() {

  const navigation = useNavigation();
  const route = useRoute();
  return (

  <ScrollView style={styles.background}>

    {/*Header*/}
    <View style={styles.HeaderSectionRow}>
      <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
        <Text style={styles.buttonText}>&lt;- Back</Text>
      </TouchableOpacity>
      <Text style={styles.TextHeader}>SDM Lab Session: Observer Pattern</Text>
    </View>


    {/* Main Content */}
    <View style={styles.mainBox}>

      {/*Sidebar*/}
      <Sidebar navigation={navigation} title={route.params.title}/>


      {/*Question Text*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 1.1 - Design the Interface</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Firstly, we need to refactor the code to make our “Customers” work with the Observer pattern.
            We must set up an interface that can then be implemented by any object that wants to be an Observer,
            regardless of its superclass or purpose.
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>

          <Text style={styles.TextParagraph}>
            To the UML diagram, we need to do a few things:{"\n"}{"\n"}

            -	Add an interface called “Loanee”. This should implement one method called “Update”
            which takes a single parameter called “Message”, and returns a String.{"\n"}{"\n"}

            -	Add a relationship between Loanee and the two Customer classes "PrivateCustomer" and "SchoolLibrary"{"\n"}{"\n"}

            Don't worry about how Book and Loanee interact, we'll deal with that when we add the rest of the pattern!

          </Text>

          <Text style={styles.TextParagraph}>
            Once you’re done, move on to the next page. This will contain a diagram with the answers.
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question1_2')}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>


  );
}

