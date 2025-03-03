
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

export default function question1_2() {

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
        <Text style={styles.TextHeader}>Question 1.2 - Implement the Interface</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            The parts in RED are what we have implemented.
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML1.png")}/>
            <Text style={styles.FigureSubText}>Library Changes to Implement - Source: Github Repo</Text>
          </View>


          <Text style={styles.TextParagraph}>

            You should run two test suites to check your work; "IntegrityTests" check that the system can loan and return books, while "LoaneeTests" check that you have implemented the "Loanee Interface" as described by the UML.{"\n"}{"\n"}

            If all the tests pass, then you have completed this part of the session. If you are stuck, look over some of the resources on the observer pattern - linked on the "materials" page. If you are still stuck, then head to the
            repo and download the "QuestionOneAnswers" Branch to skip this question.{"\n"}{"\n"}

            Scroll down to, and click on, "Next Question" for a multiple choice question before we head into the next section.{"\n"}

          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

