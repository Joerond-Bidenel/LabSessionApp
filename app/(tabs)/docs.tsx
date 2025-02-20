
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation} from '@react-navigation/native';


import styles from "@/app/style";
import Sidebar from "@/app/(tabs)/Sidebar";

export default function docs() {



  const navigation = useNavigation();

  return (

    <ScrollView style={styles.background}>
w
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
