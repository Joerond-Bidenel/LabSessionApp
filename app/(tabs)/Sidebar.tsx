import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {FlatList} from "react-native-gesture-handler";

import styles from "@/app/style";
import {useNavigation} from "@react-navigation/native";

const Sidebar = sidebarProps => {

    return(
    <View style={styles.sidebar}>
        <FlatList
            contentContainerStyle={styles.list}
            data={[{key:'Observer: Overview', value:'question1'}, {key:'Observer: Design Interface', value:'question1_1'}, {key:'Observer: Implement Interface', value: 'question1_2'}, {key:'Observer: Multiple Choice', value: 'multipleChoice'}, {key:'Observer: Design Waiting List', value: 'question2_1'}, {key:'Observer: Implement Waiting List', value: 'question2_2'}, {key:'Observer: Multiple Choice Part 2', value: 'multipleChoice'},]}
            renderItem={({item}) =>{
                if (sidebarProps.title == item.value){
                    return(
                        <TouchableOpacity style={styles.buttonSideThis} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }
                else{
                    return(
                        <TouchableOpacity style={styles.buttonSide} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }}}
        />

        <FlatList
            contentContainerStyle={styles.list}
            data={[{key:'State: Overview', value:'question3'}, {key:'State: Design Refactor', value: 'question3_1'}, {key:'State: Refactor Code', value: 'question3_2'}, {key:'State: Multiple Choice', value: 'multipleChoice'}]}
            renderItem={({item}) =>{
                if (sidebarProps.title == item.value){
                    return(
                        <TouchableOpacity style={styles.buttonSideThis} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }
                else{
                    return(
                        <TouchableOpacity style={styles.buttonSide} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }}}
        />

        <FlatList
            contentContainerStyle={styles.list}
            data={[{key:'Singleton: Overview', value:'question4'}, {key:'Singleton: Design UML', value: 'question4_1'}, {key:'Singleton: Implement Singleton', value: 'question4_2'}, {key:'Singleton: Multiple Choice', value: 'multipleChoice'}]}
            renderItem={({item}) =>{
                if (sidebarProps.title == item.value){
                    return(
                        <TouchableOpacity style={styles.buttonSideThis} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }
                else{
                    return(
                        <TouchableOpacity style={styles.buttonSide} onPress={ () => {sidebarProps.navigation.navigate(item.value)}}>
                            <Text style={styles.buttonText}>{item.key}</Text>
                        </TouchableOpacity>
                    )
                }}}
        />

    </View>
    )

}

export default Sidebar