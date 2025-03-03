
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
            Now, we’re going to implement the changes to the diagram into the Java Code.
            For this task, please follow the names and structure of the answer diagram rather than your own, so that the automarker works properly!
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UMLQuestionTwoChanges.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>


          <Text style={styles.TextParagraph}>
            For this task, you'll need to:{"\n"}{"\n"}

            >	Add the new “Waiting List” Class into the "org.example" directory, and add all of the methods below:{"\n"}
            ---->	"subscribe", to add a Loanee to the list{"\n"}
            ---->	"unsubscribe", to remove the Loanee from the list.{"\n"}
            ---->	"notifySubscribers", which invokes the “update” method on all stored Loanees{"\n"}
            ----> "getSubscribed", which returns an Arraylist of all Loanees in the Waiting List{"\n"}{"\n"}

            > Represent the relationship between book and Waiting list (i.e how does book store its waiting list?).

          </Text>



          <Text style={styles.TextParagraph}>
            Once you've implemented the features, run the previous test sets. Download/Move the <b>"WaitingListTests"</b> into the tests directory and run these too.
            They will give feedback on your code - whether you're correct or what you're missing.{"\n"}{"\n"}

            The Repository contains the test sets for this question in the "tests" folder incase you don't have them.{"\n"}
            You can also check out the Github Branch for this question if you get stuck and want to jump to the answer (look for the branch called "QuestionOneAnswers").{"\n"}
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

