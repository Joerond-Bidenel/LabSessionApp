
import {Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'

import {useNavigation, createStaticNavigation} from '@react-navigation/native';

import styles from "@/app/style";


export default function Splash() {

  const navigation = useNavigation();

  return (

    <ScrollView style={styles.background}>

      <View style={styles.HeaderSection}>
        <Text style={styles.TextHeader}>SDM Design Patterns Lab Session</Text>
        <Text style={styles.SubText}>Nathan Ross - UG4 Honours Project</Text>
      </View>

      {/* Survey Information*/}
      <View style={styles.TextSectionMain}>
        <Text style={styles.TextHeader}>Honours Project Research</Text>

        <Text style={styles.TextParagraph}>
          This Lab Session was created for my Year 4 Honours Project "Pedagogically Sensible Lab Sessions for Software Design and Modelling", and as such
          I am running a post-session questionnaire on the Lab Session and its content.
          {"\n"}{"\n"}
          Its perfectly fine if you want to try out the session without answering, but it would really help if you could take 5 minutes or so to give your thoughts.
          The link will also be at the end of the session if you decide to answer.
          Thank you for participating either way!
        </Text>

        <Text style={styles.TextParagraph}>
          <Text style={styles.buttonText}>https://forms.office.com/e/b0aA7fSJ2e</Text>
        </Text>


      </View>


  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSectionMain}>

        <Text style={styles.TextHeader}>Lab Session Overview</Text>

        <Text style={styles.TextParagraph}>
          Welcome to my Software Design and Modelling Lab Session!{"\n"}
          In this session we will be discussing Design Patterns, which are solutions to commonly occurring software design problems.
          Think of them like a plan (but not an exact blueprint) for describing the interaction between classes in your code.
        </Text>
        
        <Text style={styles.TextParagraph}>
          In class this week (week 7) you might have looked at patterns and their UML diagrams - don't worry if you haven't because you
          should be able to complete the tasks with just your knowledge of UML.

          In this session, we will cover the theory, UML, and code behind design patterns by refactoring a simple system
          to show how patterns are implemented and when you might want to use or avoid them.
        </Text>

        <Text style={styles.TextParagraph}>
          The session requires you to draw some UML diagrams, so have a tool ready - I am going to give instructions for the free online platform "Draw.io" but you could use any - even
          pen and paper will be enough.{"\n"}{"\n"}
          You will also need to write some Java code and run some JUnit tests. An IDE like "IntelliJ" would be best here, but
          even a text editor will work so long as you have Java installed, and can run the code.{"\n"}{"\n"}
          A github repository with all of this session's code, answers, JUnit Tests, and UML diagrams is available here: <b>https://github.com/Joerond-Bidenel/SDMLabSession</b>
        </Text>

        <Text style={styles.TextParagraph}>
          If you would like a refresher on the materials, click the "materials" link below. Otherwise, press start to head to the
          first question!
        </Text>

        <View style={{flexDirection: "row"}}>

          <TouchableOpacity style={styles.buttonHelp} onPress={ ()=> {navigation.navigate('docs', {screen: "documentation"})}}>
            <Text style={styles.buttonText}>Materials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGo} onPress={ ()=> {navigation.navigate('question1', {screen: "question1"})}}>
            <Text style={styles.buttonText}>Start Session</Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>


  );
}