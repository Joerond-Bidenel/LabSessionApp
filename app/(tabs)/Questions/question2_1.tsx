
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

export default function question2_1() {

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
        <Text style={styles.TextHeader}>Question 2.1 - Design the Waiting List</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Now that we have a uniform way to talk to our Observers via the interface, we need to add the features that let us notify them of available books. We will start
            by moddifying the UML again. {"\n"}
            We need to implement the “Waiting List” Class, where we’ll implement the features that let us add,
            remove, and alert the “Loanee” objects when the Subject changes.
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>

          <Text style={styles.TextParagraph}>
            Add a new class Called “Waiting List” to the UML diagram, which should be linked to the “Book” (as this is the subject we are observing).
          </Text>

          <Text style={styles.TextParagraph}>
            Waiting List should also be connected to the Loanee Interface, as a waiting list can have many Loanees attached.
          </Text>

          <Text style={styles.TextParagraph}>
            Add methods in the Waiting List for the following tasks {"\n"}{"\n"}
            -	“Subscribe”, for adding a customer{"\n"}
            -	“Unsubscribe”, for removing a customer{"\n"}
            -	“NotifySubscribers”, for alerting a set of customers{"\n"}

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

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question2_2', {name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

