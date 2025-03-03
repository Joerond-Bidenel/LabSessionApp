
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
            <Image style={styles.image} source={require("../../images/UMLQuestionOneChanges.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Github Repo</Text>
          </View>

          <Text style={styles.TextParagraph}>

            We've added a Loanee Interface. Notice how this is explicitly marked as an &lt;&lt;Interface&gt;&gt;.{"\n"}{"\n"}

            We have added the "update" method in the Loanee Interface. It is a public method, so we need a "+" before the name, we take a single String parameter called "message", and output nothing.{"\n"}{"\n"}

            The two "Customer" subclasses have an "implements" relationship with the interface. In this case, it is technically correct for the "Customer" superclass to implement it, but this was not specified.
            There theoretically could be a customer that isn't a Loanee, and needs the methods.{"\n"}{"\n"}
            The dotted line with a hollow arrowhead shows that we are implementing an interface. Be careful with the arrowhead, as it differentiates Implementation from a Dependency.{"\n"}{"\n"}

            The "update" method is explicitly added to the "PrivateCustomer" and "SchoolLibrary" classes. Generally you shouldn't do this as it is implied that the method is inherited from Loanee. However, as you see in the next task, we
            override this method when we inherit it, so we need to add it to the UML explicitly.

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

