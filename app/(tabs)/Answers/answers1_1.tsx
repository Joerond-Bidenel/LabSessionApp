
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

            The parts in RED are those we have added for this question.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML1.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Github Repo</Text>
          </View>

          <Text style={styles.TextParagraph}>

            We've added a Loanee Interface. Notice how this is marked as &lt;&lt;Interface&gt;&gt;.{"\n"}{"\n"}

            We have implemented the "update" method in Loanee and the two implementing classes. It is a public method, so we need a "+" before the name, we take a single String parameter called "message", and output a String.

            You might see this as unneccesary repetition, and it is personal preference,
            but this can help show that the method will be overwritten in the implementing classes.{"\n"}{"\n"}

            The dotted line with a hollow arrowhead shows that we are implementing an interface. Be careful with the arrowhead, as it differentiates this from a Dependency.{"\n"}{"\n"}



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

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question1_2')}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>


  );
}

