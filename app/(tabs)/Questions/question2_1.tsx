
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
            Now that we have a standard for Observers to follow via the interface, we need to add the features that let us notify them of available books. We will start
            by modifying the UML again. {"\n"}
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLQuestionOne.png")}/>
            <Text style={styles.FigureSubText}>Library System to Extend - Source: Nathan Ross</Text>
          </View>

          <Text style={styles.TextParagraph}>
            We need to implement the “Waiting List” Class, where we’ll implement the features that let us add,
            remove, and alert a set of “Loanee” objects when the Subject changes - in this case, when a change in book is observed.
          </Text>

          <Text style={styles.TextParagraph}>
            Add a new class Called “Waiting List” to the UML diagram, which should have a relationship to the “Book” class (as this is the subject we are observing).{"\n"}{"\n"}

            Add a relationship between Waiting List and the Loanee Interface, as a waiting list has Loanees.{"\n"}{"\n"}

            Add methods in the Waiting List for the following tasks. Come up with a sensible input and output parameter/type for each of them: {"\n"}
            >	“subscribe”, for adding a Loanee{"\n"}
            >	“unsubscribe”, for removing a Loanee{"\n"}
            >	“notifySubscribers”, for alerting a set of Loanee Objects.{"\n"}
            > "getSubscribed", which returns an ArrayList of Loanees (For the Java tests!){"\n"}

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

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('answers2_1', {name: "amongus"});}}>
        <Text style={styles.buttonText}>Get Answers</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

