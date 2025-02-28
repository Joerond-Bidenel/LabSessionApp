
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
      "Correct! Any class can implement the interface and receive alerts from the waiting list - not just clients. This helps us adhere to the Interface Segregation and Open-Closed principles!"
  ]

  //1 - "Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",
  const a2 = [
      "To help the waiting list follow the Single Responsibility Principle",
      "To follow proper UML syntax",
      "To help follow the Liskov Substitution Principle",
      "No Reason. This is a developer's personal preference.",
  ]
  const s2 = [
      "The Waiting List class is an example of the Single Responsibility Principle, where this class only has one function. You can add features and structures to the waiting list without confusion - if the methods and data structures were all in the Book class, it would be more difficult to understand what methods relate to the waiting list at a glance.",
      "UML and code can be written in many different ways to represent the same functionality. UML would not forbid placing the waiting list inside of Book",
      "The Liskov Substitution Principle says: \" A subclass must work in place of its superclass. Add or re-implement features in a subclass, but do not break functionality.\" \nThere are no Sub or Superclasses involved in the interaction between Book and Waiting List, so this does not apply.",
      "This is technically correct. The Observer code could be put into book with no change in function. However, to create better, more modular code (which is a big part of the reason for using patterns), we usually extract these functions to classes or interfaces."
  ]


  //2 - "Is the waiting list is an example of the ”Singleton” Design Pattern?",
  const a3 = [
    "True",
    "False",
  ]
  const s3 = [
      "The waiting list has a one-to-one relationship with book, but this doesn't mean it follows the singleton pattern. Singleton defines a single global instance - and we don't want one waiting list for every book!",
      "Correct! Waiting List only has one instance per book, but that doesn't make it a singleton, which is one global instance."
  ]

  //3 - Which of the SOLID Design Principles are we most NOT adhering to by connecting the waiting list to the Loanee Interface rather than the Customer superclass?
  const a4 = [
    "Single Responsibility Principle",
    "Open Closed Principle",
    "Liskov Substitution Principle",
    "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "None of the above - we don't break any of them!"
  ]
  const s4 = [
      "Incorrect! Loanee has one responsibility, which is to provide the update method. Similarly, waitingList pulls functionality away from book, helping adhere to the principle.",
      "Incorrect! Observer most closely adheres to this principle! We are open for extending to new Loanee types, but closed for modifying the Waiting List's behaviour.",
      "Incorrect! Liskov can be applied to interfaces, as it is specifying the relationship! Both PrivateCustomer and SchoolLibrary are both substitutable for Loanee.",
      "Incorrect! We create the Loanee Interface because the Waiting List only needs the Update function. This means it is not depending on anything it does not need.",
      "Incorrect! We are using Loanee as an abstraction between the concrete classes - so that the high level Subject (Book/WaitingList) doesn't depend on the Low-Level Observer (PrivateCustomer, SchoolLibrary).",
      "Correct! We don't directly break any of the SOLID principles when we implement observer this way! Retry the question and click on each to see why!"
  ]

  //4 - What Tradeoff are we usually making when we decide to implement a Design Pattern in a system?
  const a5 = [
    "Better Readability, but slower code",
    "Poorer Maintainability, lower cohesion",
    "More Lines of code, better maintainability",
    "Lower maintainability, lower number of lines of code",
  ]
  const s5 = [
      "Incorrect! Though patterns do add readability in many cases, code speed is not a generalisable factor - the abstractions and wrapper methods that many patterns use can make code slower, but it is generally insignificant.",
      "Incorrect! We are increasing cohesion by writing extra classes and methods, and following the Single Responsibility Principle.",
      "Correct! Patterns frequently add lines of code - In our case, we have added many lines of code for what is essentially a List and a Loop. However, in more complex systems, other developers will be able to look at the structure the pattern manifests to identify its purpose, rather than reading and comprehending the code itself!",
      "Incorrect! Think of how many lines of code we have used to implement Observer, and how a much simpler approach of a just a list and a loop might have looked! Research shows that the GOOD use of patterns increases maintainability - you are correct when patterns are badly designed and implemented though!",
  ]

    //5 - Does State break LoD?
    const a6 = [
        "No, because State is depends on book and book depends on Waiting List, so this is an implicit relationship.",
        "Yes, because Book \"Owns\" WaitingList, so no other class should invoke it.",
        "No, because we only call Waiting List. We don't wait or depend on a response.",
        "Yes, because the two states now can't operate or compile without the WaitingList existing.",
    ]
    const s6 = [
        "Incorrect! By this reasoning, every class is connected, so UML associations would mean nothing in practice. The Law of Demeter is sometimes called the \"Two Dot Rule\" as you should only access methods within one association of the current class!",
        "Incorrect! We could add any number of UML associations between Waiting List and other classes so that they can communicate - we just haven't in this example.",
        "Incorrect! We still depend on Waiting List. Try it in Java - temporarily delete the WaitingList class, and see how many other classes now don't compile - these are its dependents and associations!",
        "Correct! This is a \"Hidden Dependency\", and should be present in UML. To get around this, there should be methods in Book for using the Waiting List's methods",
    ]

    //6 - Singleton SRP
    const a7 = [
        "Single Responsibility Principle",
        "Open Closed Principle",
        "Liskov Substitution Principle",
        "Interface Segregation Principle",
        "Dependency Inversion Principle",
        "None of the above - we don't break any of them!"
    ]
    const s7 = [
        "Correct! The Single Responsibility Principle is broken when a singleton manages its creation and lifecycle - i.e it creates itself, ensures it only ever has one instance, and manages who can access it.",
        "Incorrect! We aren't interacting with the Open-Closed Principle",
        "Incorrect! We aren't interacting with the Liskov Substitution Principle",
        "Incorrect! We aren't interacting with the Interface Segregation Principle. Lazy Instantiation doesn't count as not depending on things we do not need, as there is still a dependency whether the singleton was instantiated or not!",
        "Incorrect! We aren't interacting with the Dependency Inversion Principle",
        "Incorrect! Singleton does break one of the SOLID principles. Think of the lifecycle of a singleton and what it controls."
    ]

    //7 - Global State. Which is Not True?
    const a8 = [
        "Global State adds Hidden Dependencies",
        "Global State is inconsistent when immutable",
        "Global State is hard to make changes to",
        "Global State makes code less readable",
    ]
    const s8 = [
        "Incorrect! Badly designed global state often leads to many hidden dependencies",
        "Correct! The whole point of Global State is that everything has access to a consistent set of data. Being immutable (unchangeable/static) helps this greatly, as we get inconsistency when the data changes.",
        "Incorrect! Many things can rely on a global state. One change could change something on the other side of the system that you thought was unrelated!.",
        "Incorrect! Global state can make code a tangle of dependencies, and hard-coded data that you struggle to track down."
    ]

  const questions = [
    "Why have we created an Interface called \"Loanee\" rather than using a superclass - or using an existing superclass?",

    "Why is the waiting list extracted to its own class rather than being implemented inside the ”Book” class?",

    "Is the waiting list is an example of the ”Singleton” Design Pattern?",

    "Which SOLID principle are we NOT following when we implemented the Observer Pattern?",

    "What tradeoff do we consider when implementing a pattern?",

    "Say we add calls to subscribe and unsubscribe in the two \"LoanState\" classes of \"Book\", do we break the Law of Demeter?",

      "What SOLID Principle Does Singleton often break?",
      "Which of these is not true when dealing with global state?"
  ]
  const correctNumbers = [3, 0, 1, 5, 2, 3, 0, 1]

  const answers = [a1, a2, a3, a4, a5, a6, a7, a8]

  const solutions = [s1, s2, s3, s4, s5, s6, s7, s8]

  const nextPages = ["question2_1", "multipleChoice", "multipleChoice", "multipleChoice", "multipleChoice", "question3", "multipleChoice", "thanks"]
  const params = [0, 2, 3, 4, 5, 6, 7, 8, 9]


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
