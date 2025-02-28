
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

      <Text style={styles.TextHeader}>SDM Lab Session: State Pattern</Text>
    </View>


    {/* Main Content */}
    <View style={styles.mainBox}>

      {/*Sidebar*/}
      <Sidebar navigation={navigation} title={route.params.title}/>


      {/*Question Text*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 3 - Design and Refactor the State Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Continuing with the Library System from the last question, lets look at another pattern - one already implemented in the system. State.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/StateReGuru.png")}/>
            <Text style={styles.FigureSubText}>State Pattern UML - Source: Refactoring.Guru</Text>
          </View>



          <Text style={styles.TextParagraph}>
            State and Strategy are two very similar patterns that have a simple purpose - allow a function to do something different based on the current context (like the value of a variable, what time it is,
            how many operations have been done in the past etc) – it’s kind of like building an IF statement with classes as the body.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML2White.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>

          <Text style={styles.TextParagraph}>
            Look at the Java code and the UML diagram and see how “Book” implements the state pattern.

            We update the current state when we take and loan books. When someone tries to loan a book, we call the "loan()" function. This is called in whatever the current state we are in - no need for an if/else every time!

            {"\n"}{"\n"}

            Unfortunately, this is what makes the pattern problematic in this system. We only have 2 states and they are used by only one function - so we are essentially adding 3 classes to replace one if/else. This is making our UML and code unnecessarily cluttered! Lets do something about that!
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question3_1', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Start Question Three</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

