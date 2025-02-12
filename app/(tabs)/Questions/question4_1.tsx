
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

export default function question1() {

  const navigation = useNavigation();
  const route = useRoute();
  return (

  <ScrollView style={styles.background}>

    {/*Header*/}
    <View style={styles.HeaderSectionRow}>

      <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
        <Text style={styles.buttonText}>&lt;- Back</Text>
      </TouchableOpacity>

      <Text style={styles.TextHeader}>SDM Lab Session: Singleton Pattern</Text>
    </View>


    {/* Main Content */}
    <View style={styles.mainBox}>

      {/*Sidebar*/}
      <Sidebar navigation={navigation} title={route.params.title}/>


      {/*Question Text*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 4 - Design UML for the Singleton Pattern</Text>

        <View style={styles.TextSection}>

          <Text style={styles.TextParagraph}>
            Suppose you have a library, with many books, many copies of those books, and many customers that want to lend them.
            Below you can see a diagram of this system – familiarise yourself with it, as we will be extending this, and editing the code it describes in the next questions!

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
          </View>



          <Text style={styles.TextParagraph}>
            Customers are, of course, very interested in certain books and the library only has so many copies.
            You don't want customers to have to come to the library every day to check availability, because they might waste many trips without the book being ready.
            However, you don't want to alert everyone in the library system that "50 shades of Gray" is back in stock, because not everyone wants (or needs) to know this.{"\n"}

            We might also have a wide variety of customers. We could have normal people,
            other libraries that might want to trade books, schools that need resources, businesses et cetera. We need to cater to all of these.

          </Text>

          <Text style={styles.TextParagraph}>
            This is a prime application of the OBSERVER design pattern. Our customers - called observers - can be alerted about a specific book - called a Subject – when an action occurs.
            In this case when a copy of the book is taken or returned. The observer pattern can be instantiated for each book,
            so customers can be subscribed on the list for only books they are interested in.
          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Observer Pattern UML - Source: Refactoring.Guru</Text>
          </View>

          <Text style={styles.TextParagraph}>
            There are many other obvious applications of the observer pattern - Youtube Subscriptions, social media feeds, mailing lists,
            online auctions et cetera.{"\n"}
            Also think about more abstract applications. When a gaming PC goes on sleep mode, it's monitors, speakers, lights, and fans are
            observers, waiting on the keyboard, mouse, or power button Subjects to be pressed before turning on again.
          </Text>

          <Text style={styles.TextParagraph}>
            Your task in this section will be to implement the observer pattern to the example library system. You will model the pattern using some UML, write the code in Java,
            and answer some questions about the implementation and design decisions. This will be broken down into small steps to help understand and solve the problem.

          </Text>
        </View>
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
        <Text style={styles.buttonText}>Help and Materials</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 0, name: "amongus"});}}>
        <Text style={styles.buttonText}>Start Question One</Text>
      </TouchableOpacity>
    </View>

  </ScrollView>


  );
}

