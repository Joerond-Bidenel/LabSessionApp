
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'

import {useNavigation, createStaticNavigation} from '@react-navigation/native';



export default function Splash() {

  const navigation = useNavigation();

  return (

    <ScrollView style={styles.background}>

      <View style={styles.HeaderSection}>
        <Text style={styles.TextHeader}>SDM Design Patterns Lab Session</Text>
        <Text style={styles.SubText}>Nathan Ross - UG4 Honours Project</Text>
      </View>

  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSection}>

        <Text style={styles.TextParagraph}>
          Welcome to my Software Design and Modelling Lab Session!
          In this session we will be discussing Design Patterns, which are solutions to commonly occurring software design problems.
          Think of them like a plan (not a blueprint) for describing the interaction between classes in your code.
        </Text>
        
        <Text style={styles.TextParagraph}>
          In class so far you might have looked at patterns and their UML diagrams, and don't worry if you haven't because you
          should still be able to complete the tasks with your knowledge of UML.

          In this session we will cover the theory, UML, and code behind design patterns by refactoring some simple code
          to show how patterns are implemented and when you might want to use or avoid them.
        </Text>

        <Text style={styles.TextParagraph}>
          The session requires you to draw some UML diagrams, so have a tool ready. I like "draw.io", but you could use any - even
          pen and paper will be enough.{"\n"}
          You will also need to write some Java code and run some JUnit tests. An IDE like IntelliJ would be best here, but
          even a text editor will work so long as you can run the code.
        </Text>

        <Text style={styles.TextParagraph}>
          If you would like a refresher on the materials, click the "materials" link below. Otherwise, press start for the
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

      {/* Survey Information*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Project Research</Text>

        <Text style={styles.TextParagraph}>
          This Lab Session was created for my Year 4 Honours Project "Pedagogically Sensible Lab Sessions for Software Design and Modelling", and as such
          I am running a post-session questionnaire on the Lab Session and its content.
        </Text>
        
        <Text style={styles.TextParagraph}>
          Its perfectly fine if you want to try out the session without doing the survey, but it would really help if you could take 5 minutes or so to give your thoughts
          on the session. Thank you for participating either way!
        </Text>

        <TouchableOpacity style={styles.buttonGo} onPress={ ()=> {navigation.navigate('question1', {screen: "question1"})}}>
          <Text style={styles.buttonText}>Survey Link</Text>
        </TouchableOpacity>


      </View>
      
      

    </ScrollView>


  );
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