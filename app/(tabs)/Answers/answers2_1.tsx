
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

export default function question2_1() {

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
        <Text style={styles.TextHeader}>Question 2.1 - Design the Waiting List</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>

            The parts in RED are those we have added for this question.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/UML2.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>


          <Text style={styles.TextParagraph}>

            We've added a new class called "Waiting List".{"\n"}{"\n"}

            There is a 1-to-1 association between Book and Waiting List; one book has exactly one waiting list.{"\n"}{"\n"}

            There is a aggregation arrow between WaitingList and Loanee, with a One-to-Many relationship. This indicates that a waiting list is made up of an unknown number of Loanees. There is an
            aggregation rather than a composition as a Loanee can exist without the Waiting List. For example, see how LoanState is a composition, because when Book is deleted there is no need for the states to exist.{"\n"}{"\n"}

            Notice how we have no data structure defined for storing Loanees inside the Waiting List, because this is redundant/unnecessary repetition. The aggregation arrow tells us that this should exist implicitly - in the same way that there isn't a variable called "WaitingList" inside "Book".{"\n"}{"\n"}

            The public subscribe method takes in a Loanee, and returns void. We simply add the passed Loanee to the waiting List. There is no need to return anything, though you could argue that a boolean for success would be helpful.
            {"\n"}{"\n"}

            The public unsubscribe method takes in a Loanee, and returns void. We simply remove the passed Loanee from the waiting List. Again, you could argue for a boolean instead of void.
            {"\n"}{"\n"}

            The public notifySubscribers method takes in a String "message", and returns void. In here, we invoke the "update" method in the Loanee, with whatever message book wants to update Loanees on.
            {"\n"}{"\n"}

            The method "getSubscribed" takes no input, and returns an arraylist of subscribers. This is a standard "getter" method that is needed for Java Tests.




          </Text>

          <Text style={styles.TextParagraph}>
            Move on to the next question once you are happy with your answer!
          </Text>

        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('question2_2', {name: "amongus"});}}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

