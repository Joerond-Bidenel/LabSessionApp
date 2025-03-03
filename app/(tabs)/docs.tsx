
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

      <View style={styles.HeaderSection}>
        <Text style={styles.TextHeader}>SDM Design Patterns Lab Session</Text>
        <Text style={styles.SubText}>Nathan Ross - UG4 Honours Project</Text>
      </View>

        <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
          <Text style={styles.buttonText}>&lt;- Back To Homepage</Text>
        </TouchableOpacity>
  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Session Help</Text>

        {/*Location of Repository, including questions as worksheets/PDFs*/}
        <Text style={styles.TextParagraph}>
          If you're looking for session materials, test sets, or answers, head to the Github Repo and follow the instructions in the README file: <b>https://github.com/Joerond-Bidenel/SDMLabSession</b>
        </Text>

        <Text style={styles.TextParagraph}>
          There are many available resources to learn about patterns if you are stuck. Your first location to look for help should be the SDM materials available here:{"\n"}{"\n"} <b>https://opencourse.inf.ed.ac.uk/sdm/course-materials/week-7</b>

        </Text>

        <Text style={styles.TextParagraph}>
          Refactoring Guru has a description, explaination, and implementation of most design patterns. If you're struggling with a pattern, head to their website and have a look.{"\n"}{"\n"}

          <b>https://refactoring.guru/design-patterns/observer {"\n"}

            https://refactoring.guru/design-patterns/singleton{"\n"}</b>

        </Text>

        <Text style={styles.TextParagraph}>
          Wikipedia actually has some good resources on design patterns - including their implementations in different languages.{"\n"}{"\n"}
          <b>https://en.wikipedia.org/wiki/Observer_pattern</b>{"\n"}
          <b>https://en.wikipedia.org/wiki/Singleton_pattern</b>
        </Text>

      </View>

    </ScrollView>


  );
}
