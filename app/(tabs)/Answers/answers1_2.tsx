
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
            The parts in RED are what we have added.
          </Text>

          <Text style={styles.TextParagraph}>
            You’ll need to: {"\n"}{"\n"}

            -	Implement the Loanee Interface{"\n"}{"\n"}

            -	Ensure that the "Customer" classes implement the Loanee Interface. {"\n"}{"\n"}

            -	Add the “update” method to the interface and the client classes.{"\n"}{"\n"}

            o	For the Loanee Interface, the update method should return the message unaltered{"\n"}
            	i.e “MessageSaysThis”{"\n"}{"\n"}

            o	For PrivateCustomer, the update method should return the customer’s name prepended to the message, with a space{"\n"}
            	i.e  “JohnSmith MessageSaysThis”{"\n"}{"\n"}

            o	For SchoolLibrary, the update method should return the name and location of the customer prepended to the message, with spaces between them{"\n"}
            	i.e “UniversityOfEdinburgh Edinburgh MessageSaysThis”{"\n"}{"\n"}


          </Text>

          <Text style={styles.TextParagraph}>
            The Repository contains test sets for this question, called "". {"\n"}
            Run them, and they will give feedback on your code - if you're correct or what you're missing!
            You can also check out the Github Branch for this question if you get stuck and want the answer.
          </Text>

          <Text style={styles.TextParagraph}>
            Once you've had a chance to review and finalise your code, head to the next question!
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

