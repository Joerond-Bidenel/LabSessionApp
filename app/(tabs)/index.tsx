
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'

export default function index() {
  return (

    <ScrollView style={styles.background}>

      <View style={styles.HeaderSection}>
        <Text style={styles.TextHeader}>SDM Design Patterns Lab Session</Text>
        <Text style={styles.SubText}>Nathan Ross - UG4 Honours Project</Text>
      </View>

  
{/* Main Text Section. Introduces session. Buttons to start */}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Overview</Text>

        <Text style={styles.TextParagraph}>
          In this session we will be discussing Design Patterns, which are solutions to commonly occurring software design problems. 
          Think of them like a plan (not a blueprint) for describing the interaction between classes in your code.
        </Text>
        
        <Text style={styles.TextParagraph}>
          In class so far you have looked at patterns and their UML diagrams. In this session we hope to get a little more hands-on by refactoring 
          some simple code to show how patterns are implemented, and also when you might want to use or avoid them.
        </Text>

        <Text style={styles.TextParagraph}>
          The session requires you to draw some UML diagrams, so have a tool ready. I like "draw.io", but you could use any - even pen and paper is enough here.
        </Text>

        <Text style={styles.TextParagraph}>
          You will also need to write some Java code and run some tests. Have an IDE or text editor ready. 
        </Text>


      </View>

      {/* Survey Information*/}
      <View style={styles.TextSection}>
        <Text style={styles.TextHeader}>Project Research</Text>

        <Text style={styles.TextParagraph}>
          This Lab Session was created for my Year 4 Honours Project "Pedagogically Sensible Lab Sessions for Software Design and Modelling", and as such
          I am running a post-session questionnaire on the Lab Session and its content.
        </Text>
        
        <Text style={styles.TextParagraph}>
          Its perfectly fine if you want to try out the session without doing the survey, but it would really help if you could take 5 minutes or so to give your thoughts
          on the session. Thank you for participating! 
        </Text>

        <Text style={styles.TextParagraph}>
          You will also need to write some Java code and run some tests. Have an IDE or text editor ready. 
        </Text>


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

    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderColor: 'white',
    borderRadius: 2,
    borderWidth: 0,
    marginTop: 5


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
    paddingHorizontal: 5
  },

  TextParagraph:{
    color: '#6ab3ff',
    fontWeight: '500',
    paddingHorizontal: 5,
    margin: 10,
  },

  Line:{
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 2,
    borderWidth: 4,
    marginTop: 5
  },
  
});
