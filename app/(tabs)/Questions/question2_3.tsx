
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

                            Now, we're done implementing the waiting list's features. The very last task is more open - lets link up the waiting list to the existing book loaning functionality.

                        </Text>

                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../../images/ObserverReGuru.png")}/>
                            <Text style={styles.FigureSubText}>Library Example System UML - Source: Nathan Ross</Text>
                        </View>


                        <Text style={styles.TextParagraph}>
                            You’ll need to:{"\n"}{"\n"}
                            -	Add a call to NotifySubscribers when:{"\n"}
                            o	A book is returned: message parameter should be "Returned"{"\n"}
                            o	The last book is loaned out: message parameter should be "All_Loaned"{"\n"}{"\n"}

                            - Add a call to "Subscribe()" when a loanee tries to loan a book but there are no copies available{"\n"}
                            - Add a call to "Unsubscribe()" when a loanee loans a book successfully{"\n"}

                        </Text>


                        <Text style={styles.TextParagraph}>
                            The Repository contains test sets for this question, called "". {"\n"}
                            Run them, and they will give feedback on your code - if you're correct or what you're missing!
                            You can also check out the Github Branch for this question if you get stuck and want the answer.
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

