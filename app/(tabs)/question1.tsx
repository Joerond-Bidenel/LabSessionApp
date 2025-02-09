
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RNPickerSelect from 'react-native-picker-select'
import {useNavigation, createStaticNavigation} from '@react-navigation/native';
import {FlatList} from "react-native-gesture-handler";

import styles from "@/app/style";

export default function question1() {

  const navigation = useNavigation();

  return (

  <ScrollView style={styles.background}>
    <View style={styles.HeaderSectionRow}>

      <TouchableOpacity style={styles.buttonBack} onPress={ ()=> {this.navigation.back()}}>
        <Text style={styles.buttonText}>&lt;- Back</Text>
      </TouchableOpacity>

      <Text style={styles.TextHeader}>Design Patterns Questions</Text>
    </View>


    {/* Question One */}
    <View style={styles.mainBox}>
      <View style={styles.sidebar}>
        <FlatList
            contentContainerStyle={styles.list}
            data={[{key:'question1'}, {key:'question2'}, {key:'question3'}, {key:'question4'}, {key:'question5'}]}
            renderItem={({item}) =>
                <TouchableOpacity style={styles.buttonSide} onPress={ () => {navigation.navigate(item.key)}}>
                  <Text style={styles.buttonText}>Go To {item.key}</Text>
                </TouchableOpacity>
            }
        />
      </View>

      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 1 - Design and Implement the Observer Pattern</Text>

        <View style={styles.TextSection}>
          <Text style={styles.TextParagraph}>
            Suppose you have a library, with many books, copies of those books, and many customers that want to lend them. Customers are, of course
            very interested in their own specific books, and the library only has so many copies, so there may be a waiting list.{"\n"}

            You don't want customers to have to come to the library  every day to check availability, because they might waste many trips without
            the book being ready.{"\n"}

            Likewise, you don't want to alert everyone in the library system that "50 shades of Gray" is back in stock, because not everyone wants
            - or needs - to know this information.

            {"\n"}{"\n"}
          </Text>

          <Text style={styles.TextParagraph}>
            This is a prime application of the OBSERVER design pattern. Our customers -
            called observers - can be alerted about a specific book - called a subject. The observer pattern can be created for each book, so
            each customer can be on the list for only books they are interested in.

            {"\n"}{"\n"}
          </Text>

          <Text style={styles.TextParagraph}>
            There are many other obvious applications of the observer pattern - Youtube Subscriptions, social media feeds, mailing lists,
            online auctions et cetera.{"\n"}
            Also think about more abstract applications. When a gaming PC goes on sleep mode, it's monitors, speakers, lights, and fans are
            observers, waiting on the keyboard, mouse, or power button Subjects to be pressed before turning on again.

            {"\n"}{"\n"}
          </Text>

          <Text style={styles.TextParagraph}>
            Your task in this section will be to implement the observer pattern to the example library system. You will model the pattern using
            some UML, write the code in Java, and answer some questions about the implementation and design decisions.

          </Text>

        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
            <Text style={styles.buttonText}>Help and Materials</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 0, name: "amongus"});}}>
            <Text style={styles.buttonText}>Start Question One</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../images/ObserverReGuru.png")}/>
        <Text style={styles.FigureSubText}>Observer Pattern UML - Source: Refactoring.Guru</Text>
      </View>

      {/*<View style={styles.sidebar}>*/}

      {/*</View>*/}

    </View>

  </ScrollView>


  );
}

