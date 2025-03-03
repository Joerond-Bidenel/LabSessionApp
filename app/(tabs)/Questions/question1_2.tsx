
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

export default function question1_2() {

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
        <Text style={styles.TextHeader}>Question 1.2 - Implement the Interface</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Now, we’re going to implement the changes to the diagram into the Java Code.
            For this task, please follow the names and structure of the answer diagram rather than your own, so that the automarker works properly!
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML1.png")}/>
            <Text style={styles.FigureSubText}>Library Changes to Implement - Source: Github Repo</Text>
          </View>

          <Text style={styles.TextParagraph}>
            You’ll need to implement the following features: {"\n"}{"\n"}

            >	Create a new Java class for the Loanee Interface in the "org.example" folder{"\n"}{"\n"}

            >	Ensure that the two subclasses "PrivateCustomer" and "SchoolLibrary" implement the Loanee Interface. {"\n"}{"\n"}

            >   Create the "update" method in the Loanee Interface{"\n"}

            o	For the Loanee Interface, the update method body should print - via System.out.println() - the message unaltered.
            i.e “MessageSaysThis”{"\n"}{"\n"}

            o	For PrivateCustomer, override the update method so that it prints the customer’s name and the message, with a space between them.
            i.e  “JohnSmith MessageSaysThis”{"\n"}{"\n"}

            o	For SchoolLibrary, override the update method so that it prints the customer’s name, location, and the message, with a space between each.
            i.e “UniversityOfEdinburgh Edinburgh MessageSaysThis”{"\n"}{"\n"}


          </Text>

          <Text style={styles.TextParagraph}>
            Once you've implemented the features, run the test sets called <b>"IntegrityTests"</b> and <b>"LoaneeTests"</b> to see if all features are implemented correctly.
            They will give feedback on your code - whether you're correct or what you're missing.{"\n"}{"\n"}

            The Repository contains the test sets for this question in the "tests" folder incase you don't have them.{"\n"}
            You can also check out the Github Branch for this question if you get stuck and want to jump to the answer (look for the branch called "QuestionOneAnswers").{"\n"}
          </Text>

          <Text style={styles.TextParagraph}>
            Once you've had a chance to run the tests, review, and finalise your code, head to the next question.
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('answers1_2', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Get Answers</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

