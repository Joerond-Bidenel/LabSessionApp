
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
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

  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Question 1 - Design and Implement the Observer Pattern</Text>

        <View style={styles.textContainer2}>
          <Text style={styles.TextParagraph}>
            Suppose you have a library, with many books, copies of those books, and many customers that want to lend them. Customers are, of course
            very interested in their own specific books, and the library only has so many copies, so there may be a waiting list.

            You don't want customers to have to come to the library  every day to check availability, because they might waste many trips without
            the book being ready.

            Likewise, you don't want to alert everyone in the library system that "50 shades of Gray" is back in stock, because not everyone wants
            - or needs - to know this information.

            <br></br><br></br>

            This is a prime application of the OBSERVER design pattern. This gives us a structure where our customers -
            called observers - can be alerted about a specific book - called a subject. The observer pattern can be created for each book, so
            each customer can be on the list for only books they are interested in.

            <br></br><br></br>

            Think of other similar systems that could use the observer pattern - Youtube Subscriptions, social media feeds, mailing lists,
            online auctions et cetera.

            <br></br><br></br>

            Also think about more abstract applications. When a gaming PC goes on sleep mode, it's monitors, speakers, lights, and fans are
            observers, waiting on the keyboard, mouse, or power button Subjects to be pressed before turning on again.

          </Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../images/ObserverReGuru.png")}/>
            <Text style={styles.FigureSubText}>Observer Pattern UML - Source: Refactoring.Guru</Text>
          </View>

        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={ () => {navigation.navigate('question1_1')}}>
            <Text style={styles.buttonText}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={ () => {navigation.navigate('docs')}}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </View>

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

    paddingHorizontal: 5,
    margin: 10,
    maxWidth:600,

    textAlign:"left",
    justifyContent:"center",

    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderColor: 'white',
    borderRadius: 2,
    borderWidth: 0,

    flex: 10,
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

  button: {
    backgroundColor: "#6ab3ff", //007dff
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    minHeight: 100,
    justifyContent:"center",
    textAlign: "center",

    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 5,
    flex: 5,
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: 'center',
    textTransform: "uppercase",
    textAlign: "center",
    padding: 8,
  },
  
});
