
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

export default function question2_2() {

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
        <Text style={styles.TextHeader}>Question 2.2 - Implement the Waiting List</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Now, we’re going to implement the changes to the diagram into the Java Code. For this task, please follow the names and structure of the exemplar diagram so that the automarker works properly.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>


          <Text style={styles.TextParagraph}>
            You’ll need to:{"\n"}{"\n"}
            -	Add the new “Waiting List” Class and all its methods:{"\n"}
            o	Subscribe adds a Loanee to an internal list{"\n"}
            o	Unsubscribe removes the client from the internal list.{"\n"}
            o	NotifySubscribers should invoke the “Update” method on the Loanee{"\n"}
          </Text>

          <Text style={styles.TextParagraph}>
            You also need to create the relationship between book and Waiting list (i.e a book has a waiting list).
          </Text>


          <Text style={styles.TextParagraph}>
            The Repository contains test sets for this question, called "". {"\n"}
            Run them, and they will give feedback on your code - if you're correct or what you're missing!
            You can also check out the Github Branch for this question if you get stuck and want the answer.
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question2_3', {number: 1, name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

