
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
                    <Text style={styles.TextHeader}>Question 2.3 - Link Up the Waiting List</Text>

                    <View style={styles.TextSection}>

                        <Text style={styles.TextParagraph}>

                            Now, we're done implementing the waiting list's features. The very last task is more open - lets actually use the pattern we just created!

                        </Text>

                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../images/UMLQuestionTwo.png")}/>
                            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
                        </View>


                        <Text style={styles.TextParagraph}>
                            To fully realise the Observer Pattern, we need to add calls to it when certain actions occur.
                            You might need to dig into the code and read the method descriptions to see where these calls would be appropriate!{"\n"}{"\n"}


                            -	In Book, add a call to NotifySubscribers when:{"\n"}
                            >	A book is returned: the message parameter should be something like "Returned"{"\n"}
                            >	The last book is loaned out (When CopiesAvailable becomes zero): the message parameter should be something like "All_Loaned"{"\n"}{"\n"}

                            - In the Library class' "loanBook" method:{"\n"}
                            > Add a call to "subscribe()" when a customer tries to loan a book, but cannot{"\n"}
                            > Add a call to "unsubscribe()" when a customer loans a book successfully.{"\n"}{"\n"}

                            Note: Normally, you would need some checks to ensure that a Customer can be cast to Loanee, but in this specific case it is always safe to pass "(Loanee) customerObject".{"\n"}{"\n"}


                            After doing this, run the program via the main method. We can see Loanees being notified when events occur! In a real system,
                            we wouldn't have the console printing - instead this represents the Loanee classes taking unique actions and running methods based on the message.{"\n"}

                            Add some more Loans, Returns, and Books to see these interactions!

                        </Text>


                        <Text style={styles.TextParagraph}>
                            Once you've implemented these calls, run all previous test sets to see if all features are still implemented correctly!
                            {"\n"}{"\n"}

                            The Repository contains the test sets for this question in the "tests" folder incase you don't have them.{"\n"}
                            You can also check out the Github Branch for this question if you get stuck and want to jump to the answer (look for the branch called "QuestionOneAnswers").{"\n"}
                        </Text>

                        <Text style={styles.TextParagraph}>
                            This is the End of the Observer Section! Move on for some consolidation Multiple Choice before tackling another pattern!
                        </Text>

                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonGo} onPress={ () => {navigation.navigate('docs')}}>
                    <Text style={styles.buttonText}>Help and Materials</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonHelp} onPress={ () => {navigation.navigate('multipleChoice', {number: 1, name: "amongus"});}}>
                    <Text style={styles.buttonText}>Start Multiple Choice</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>


    );
}

