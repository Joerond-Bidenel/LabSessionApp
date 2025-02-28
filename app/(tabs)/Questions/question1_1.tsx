
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
            Firstly, we will refactor the code to make our “Customers” ready for use with the Observer pattern. Our Waiting List needs to know that everything subscribed to the waiting list has a method it can call when it observes a change.{"\n"}{"\n"}

            While we could use the existing "Customer" superclass to implement the common method(s) a loanee needs, we instead want to use an interface for this - where any object that wants to
            join the list has to implement it's features. This allows us to add <i>ANY</i> class to the list, not just Customers. Think of why you might want to do this - what systems or processes may
            need altered when a book arrives for a return?

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLStarter.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Github Repo</Text>
          </View>

          <Text style={styles.TextParagraph}>
            To the UML diagram above - which you can download from the Github Repo- we need to add two things:{"\n"}{"\n"}

           > An Interface called “Loanee”. This has one method called “Update” taking one String parameter “message”, and returning a String.{"\n"}{"\n"}

            > An appropriate UML relationship between Loanee and the two Customer subclasses "PrivateCustomer" and "SchoolLibrary"{"\n"}{"\n"}

            Don't worry about how Book and Loanee interact, we'll deal with that when we add the rest of the pattern!

          </Text>

          <Text style={styles.TextParagraph}>
            Once you’ve made the two changes, move on to the next page (you may need to scroll quite far down. Sorry). This will contain a diagram with the answers, and why we have made certain decisions.
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('answers1_1')}}>
        <Text style={styles.buttonText}>Get Answers</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>


  );
}

