
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation, useRoute} from '@react-navigation/native';
import {useContext, useState} from "react";
import {useSearchParams} from "expo-router/build/hooks";

export default function multipleChoice() {

  const navigation = useNavigation();
  const route = useRoute();

  const [answer, setAnswer] = useState(-1);


  return (

    <ScrollView style={styles.background}>

        <View style={styles.HeaderSectionRow}>

          <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {setAnswer(0)}}>
            <Text style={styles.buttonText}>&lt;- Back</Text>
          </TouchableOpacity>

          <Text style={styles.TextHeader}>Multiple Choice Question</Text>
        </View>

  
{/* Main Text Section. Introduces session. Buttons to start */}

        <QuestionBoxes navigation={navigation} questionNo={route.params.number} answer={answer} setAnswer={setAnswer}/>

    </ScrollView>

  );
}

const QuestionBoxes = ({navigation, questionNo, answer, setAnswer}) => {

  //"Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",

  const a1 = [
      "To help the waiting list follow the Single Responsibility Principle",
      "To follow proper UML syntax",
      "To help follow the Liskov Substitution Principle",
      "No Reason. This is a developer's personal preference.",
  ]
  const s1 = [
      "The Waiting List class is an example of the Single Responsibility Principle, where this class only has one function",
      "Incorrect. UML and code can be written in many different ways to represent the same functionality",
      "Incorrect. There are no Sub or Superclasses involved, and the Liskov Substitution Principle states: ",
      "This is technically correct. The Observer code could be put into book with no change in function. However, patterns are designed to help create good code, so think of the design decision behind this."
  ]
  const c1 = 0;

  //"Is the waiting list is an example of the ”Singleton” Design Pattern?",
  const a2 = [
    "True",
    "False",
  ]
  const s2 = [
      "The waiting list has a one-to-one relationship with book, but this doesn't mean it follows the singleton pattern. Singleton defines a single global instance - can there be a waiting list for each book?",
      "Correct!"
  ]


  const questions = [
    "Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",
    "Is the waiting list is an example of the ”Singleton” Design Pattern?",
  ]
  const correctNumbers = [0, 1]

  const answers = [a1, a2]

  const solutions = [s1, s2]


  //If unanswered
  if (answer == -1){

    //Set the Buttons
    let buttons = [];
    for (let i = 0; i < a1.length; i ++){
      buttons.push(

          <TouchableOpacity style={styles.buttonHelp} onPress={ () => {setAnswer(i)}}>
            <Text style={styles.buttonText}>{answers[questionNo][i]}</Text>
          </TouchableOpacity>
      )
    }


    //Return the completed component
    return(
        <View style={styles.TextSection}>
          <Text style={styles.TextParagraph}>{questions[questionNo]}</Text>
          <View>
          {buttons}
          </View>
          <Text style={styles.TextParagraph}>Answer the question to move to the next one!</Text>

        </View>
    )
  }
  //if answered, return the answer, correct or not
  else {

    //If correct, return in green
    if (answer == correctNumbers[questionNo]) {

      return(
      <View style={styles.TextSection}>
        <Text style={styles.TextParagraph}>{questions[questionNo]}</Text>
        <View>
          <Text style={styles.TextParagraph}>Your answer was Correct!</Text>
          <Text style={styles.TextParagraph}>{solutions[questionNo][answer]}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
            <Text style={styles.buttonText}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 0, name: "amongus"});}}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </View>

      </View>
      )

    }

    //Else return wrong answer
    return (
        <View style={styles.TextSection}>
          <Text style={styles.TextParagraph}>{questions[questionNo]}</Text>
          <View>
            <Text style={styles.TextParagraph}>Your answer was Incorrect!</Text>
            <Text style={styles.TextParagraph}>{solutions[questionNo][answer]}</Text>
          </View>

          <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
            <Text style={styles.buttonText}>Help</Text>
          </TouchableOpacity>

        </View>
    )

  }
}



const styles = StyleSheet.create({
  background: {
    backgroundColor: "grey",
  },

  HeaderSection:{
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    minHeight: 150,

    borderStyle: 'solid',
    borderBottomWidth: 5,
    borderColor: 'white',
    borderRadius: 3,
    borderWidth: 0,
  },

  HeaderSectionRow:{
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    minHeight: 150,

    flexDirection: "row",
    borderStyle: 'solid',
    borderBottomWidth: 5,
    borderColor: 'white',
    borderRadius: 3,
    borderWidth: 0,
  },

  TextSection:{
    margin: 20,
    color: 'blue',
    minHeight: 20,

    padding:10,

    flexDirection: "column",

    marginTop: 5,
    alignItems:"center",

  },

  TextHeader:{
    color: '#6ab3ff',
    fontSize: 40,
    fontWeight: '500',
    margin: 2,
  },

  SubText:{
    color: '#6ab3ff',
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 5,
  },


  TextParagraph:{
    color: '#6ab3ff',
    fontWeight: '500',
    fontSize: 18,
    paddingHorizontal: 5,
    margin: 10,
    maxWidth:700,
    textAlign:"left",
    justifyContent:"center",
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderColor: 'white',
    borderRadius: 2,
    borderWidth: 0,
  },

  textContainer2:{
    flexDirection: "row",
    paddingHorizontal: 5,
    margin: 10,
    padding: 10,
  },

  imageContainer:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image:{
    resizeMode: "contain",
    width: 400,
    height: 400,
    flex: 9,
  },

  FigureSubText:{
    color: '#6ab3ff',
    fontWeight: '500',
    textAlign: 'center',
    padding: 0,
    margin: 0,
    flex: 1,
  },

  buttonContainer:{
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "right",
  },

  buttonGo: {
    backgroundColor: "#538c50", //007dff
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    minHeight: 80,
    minWidth: 250,
    justifyContent:"center",
    textAlign: "center",

    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 4,
    flex: 4,
    flexDirection: 'row',
  },

  buttonHelp: {
    backgroundColor: "#6ab3ff", //007dff
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    minHeight: 80,
    minWidth: 250,
    justifyContent:"center",
    textAlign: "center",
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 4,
    flex: 5,
    flexDirection: 'row',
  },

  buttonBack: {
    backgroundColor: "#adadad", //007dff
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    justifyContent:"center",
    textAlign: "center",
    alignSelf: "center",

    borderStyle: "solid",
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 4,
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: 'center',
    textTransform: "uppercase",
    padding: 5,
  },


});
