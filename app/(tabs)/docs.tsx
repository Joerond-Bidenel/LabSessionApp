
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation} from '@react-navigation/native';

export default function docs() {

  const navigation = useNavigation();

  return (

    <ScrollView style={styles.background}>

      <View style={styles.HeaderSection}>
        <Text style={styles.TextHeader}>SDM Design Patterns Lab Session</Text>
        <Text style={styles.SubText}>Nathan Ross - UG4 Honours Project</Text>
      </View>

        <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
          <Text style={styles.buttonText}>&lt;- Back To Homepage</Text>
        </TouchableOpacity>
  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Materials and Resources</Text>

        {/*Location of Repository, including questions as worksheets/PDFs*/}
        <Text style={styles.TextParagraph}>
          This session uses this website to deliver the questions, but the materials are all available on a repository located
          here:
          <br/>
          This also includes the questions and answers as PDFs in the event that the website is unavailable, or doesn't work as expected on
          your machine. This will provide the session in a less fun and interactive way, but you should still learn some things!
        </Text>

        {/*Location of some helpful materials, like ReGuru etc*/}
        <Text style={styles.TextParagraph}>
          There are many available resources to learn about patterns if you are stuck:
          <br/>
          Refactoring Guru (Refactoring.guru) has a description, explaination, and implementation of many design patterns.
          <br/>
          The SDM opencourse page has the lecture slides, and some helpful links
          <br/>
          Wikipedia has fairly accurate information about design patterns
          <br/>


        </Text>

        {/*Names of some tools etc for the session/course*/}
        <Text style={styles.TextParagraph}>
          Hello World
        </Text>

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