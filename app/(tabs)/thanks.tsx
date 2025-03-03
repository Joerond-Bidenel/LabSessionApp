
import {Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'

import {useNavigation, createStaticNavigation} from '@react-navigation/native';

import styles from "@/app/style";


export default function Thanks() {

    const navigation = useNavigation();

    return (

        <ScrollView style={styles.background}>


            {/* Thanks*/}
            <View style={styles.TextSectionMain}>
                <Text style={styles.TextHeader}>Thank You!</Text>

                <Text style={styles.TextParagraph}>
                    You've reached the end of the session! Thank you for taking part, and I hope you
                    learned something new!
                </Text>
            </View>

            {/* Survey Information*/}
            <View style={styles.TextSectionMain}>
                <Text style={styles.TextHeader}>Honours Project Research</Text>

                <Text style={styles.TextParagraph}>
                    This Lab Session was created for my Year 4 Honours Project "Pedagogically Sensible Lab Sessions for Software Design and Modelling", and as such
                    I am running a post-session questionnaire on the Lab Session and its content. If you
                    have a few minutes to spare, I would be grateful if you could complete it!
                </Text>

                <Text style={styles.TextParagraph}>
                    <Text style={styles.buttonText}>https://forms.office.com/e/b0aA7fSJ2e</Text>
                </Text>

                <TouchableOpacity style={styles.buttonGo} onPress={ ()=> {navigation.navigate('splash')}}>
                    <Text style={styles.buttonText}>Return to Homepage</Text>
                </TouchableOpacity>


            </View>



        </ScrollView>


    );
}