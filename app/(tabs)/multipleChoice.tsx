
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation, useRoute} from '@react-navigation/native';
import {useContext, useState} from "react";
import {useSearchParams} from "expo-router/build/hooks";

import styles from "@/app/style";

export default function multipleChoice() {

  const navigation = useNavigation();
  const route = useRoute();

  const [answer, setAnswer] = useState(-1);


  return (

    <ScrollView style={styles.background}>

        <View style={styles.HeaderSectionRow}>

          <TouchableOpacity style={styles.buttonBack} onPress={ ()=> navigation.goBack()}>
            <Text style={styles.buttonText}>&lt;- Back</Text>
          </TouchableOpacity>

          <Text style={styles.TextHeader}>Multiple Choice Question</Text>
        </View>

  
    {/* Questions */}

        <QuestionBoxes navigation={navigation} questionNo={route.params.number} answer={answer} setAnswer={setAnswer}/>

    </ScrollView>

  );
}

const QuestionBoxes = ({navigation, questionNo, answer, setAnswer}) => {

  //0 - why is Loanee an Interface, not a superclass
  const a1 = [
    "No Reason. Developer’s personal preference.",
    "Because Java lacks Multiple Inheritance, or we always would",
    "Because Superclasses are bad design and outdated",
    "So we can add many different types of observer regardless of its type.",
  ]
  const s1 = [
      "Incorrect! Though we could make it work with a superclass in this example, we have good reasons for using an interface instead.",
      "Incorrect! Java doesn't have multiple inheritance, and in other languages you are right and we would have to use a Superclass. Python's superclasses are usable as interfaces. However, even if Java did have multiple inheritance we would likely use an interface-like structure anyway - for example to keep coupling low.",
      "Incorrect! There is nothing wrong with using a superclass. Interfaces and superclasses both have their place.",
      "Correct! Any class can implement the interface and receive alerts from the waiting list - not just clients. This helps us adhere to the Single Responsibility and Open-Closed principles!"
  ]

  //1 - "Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",
  const a2 = [
      "To help the waiting list follow the Single Responsibility Principle",
      "To follow proper UML syntax",
      "To help follow the Liskov Substitution Principle",
      "No Reason. This is a developer's personal preference.",
  ]
  const s2 = [
      "The Waiting List class is an example of the Single Responsibility Principle, where this class only has one function. You can add features and structures to the waiting list without confusiion - if the methods and data structures were in the Book class, it would be more difficult to understand that \"Notify()\" relates to the waiting list at a glance.",
      "UML and code can be written in many different ways to represent the same functionality. UML would not forbid placing the waiting list inside of Book",
      "The Liskov Substitution Principle says: \" A subclass must work in place of its superclass. Add or re-implement features in a subclass, but do not break functionality.\" \nThere are no Sub or Superclasses involved in the interaction between Book and Waiting List, so this does not apply.",
      "This is technically correct. The Observer code could be put into book with no change in function. However, patterns are designed to help create good code, so think of the design decision behind this."
  ]


  //2 - "Is the waiting list is an example of the ”Singleton” Design Pattern?",
  const a3 = [
    "True",
    "False",
  ]
  const s3 = [
      "The waiting list has a one-to-one relationship with book, but this doesn't mean it follows the singleton pattern. Singleton defines a single global instance - can there be a waiting list for each book?",
      "Correct! Waiting List only has one instance per book, but that doesn't make it a singleton, which is usually one global instance."
  ]

  //3 - Which of the SOLID Design Principles are we most closely following by using an interface to connect Waiting List to Loanee?
  const a4 = [
    "Single Responsibility Principle",
    "Open Closed Principle",
    "Dependency-Inversion Principle",
    "Demeter's Law Principle"
  ]
  const s4 = [
      "Not really. Loanee has one responsability just now, but this is not certain",
      "Correct! We are open for extending to new loanee types, but closed for modifying the Waiting List's behaviour.",
      "Incorrect!",
      "Incorrect! This isn't one of the SOLID principles, though the \"The Law of Demeter\" is something you should know!",
  ]

  //4 - What Tradeoff are we usually making when we decide to implement a Design Pattern in a system?
  const a5 = [
    "Better Readability, but slower code",
    "Poorer Readability, lower cohesion",
    "More Lines of code, better maintainability",
    "Lower maintainability, looser coupling",
  ]
  const s5 = [
      "Incorrect!",
      "Incorrect!",
      "Correct!",
      "Incorrect!",
  ]

  const questions = [
    "Why have we created an Interface called \"Loanee\" rather than using a superclass - or using an existing superclass?",

    "Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",

    "Is the waiting list is an example of the ”Singleton” Design Pattern?",

    "Which SOLID principle are we following by using an interface to connect Waiting List to Loanee?",

    "What tradeoff do we consider when implementing a pattern?",
  ]
  const correctNumbers = [3, 0, 1, 1]

  const answers = [a1, a2, a3, a4, a5]

  const solutions = [s1, s2, s3, s4, s5]

  const nextPages = ["question2_1", "multipleChoice", "multipleChoice", "question3"]
  const params = [0, 2, 3, 4, 5]


  //If unanswered
  if (answer == -1){

    //Set the Buttons
    let buttons = [];
    for (let i = 0; i < answers[questionNo].length; i ++){
      buttons.push(

          //style={styles.buttonTextSmall}
          <TouchableOpacity style={styles.buttonQuestion} onPress={ () => {setAnswer(i)}}>
            <Text style={styles.buttonTextSmall}>{answers[questionNo][i]}</Text>
          </TouchableOpacity>
      )
    }


    //Return the completed component
    return(
        <View style={styles.TextSection}>
          <Text style={styles.TextHeaderSmall}>{questions[questionNo]}</Text>
          <View>
          {buttons}
          </View>
          <Text style={styles.TextParagraph}>Answer the question to move to the next one!</Text>

        </View>
    )
  }
  //if answered, return the answer, correct or not
  else {

    let navButtons = (<Text>Something is broken</Text>)
    let wasCorrect = (<Text>Something is broken</Text>, <Text>Something is still broken</Text>)

    //If correct, return in green
    if (answer == correctNumbers[questionNo]) {

      navButtons = (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
            <Text style={styles.buttonText}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate(nextPages[questionNo], {number: params[questionNo], name: "amongus"});setAnswer(-1)}}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </View>
      )

      wasCorrect = [
          <Text style={styles.TextParagraphGreen}>Your answer was Correct!</Text>,
          <TouchableOpacity style={styles.buttonQuestion} onPress={ () => {setAnswer(-1)}} >
            <Text style={styles.buttonTextSmall}>{answers[questionNo][answer]}</Text>
          </TouchableOpacity>
      ]

    }
    else{
      navButtons = (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
              <Text style={styles.buttonText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHelp} onPress={ () => {setAnswer(-1)}}>
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          </View>
      )

      wasCorrect = [
        <Text style={styles.TextParagraphRed}>Your answer was Incorrect!</Text>,
        <TouchableOpacity style={styles.buttonQuestion} onPress={ () => {setAnswer(-1)}} >
          <Text style={styles.buttonTextSmall}>{answers[questionNo][answer]}</Text>
        </TouchableOpacity>
      ]

    }

    //return all
    return (

        <View style={styles.TextSection}>
          <Text style={styles.TextHeaderSmall}>{questions[questionNo]}</Text>
          <View>
            {wasCorrect}
            <Text style={styles.TextParagraph}>{solutions[questionNo][answer]}</Text>
          </View>

          {navButtons}

        </View>
    )

  }
}
