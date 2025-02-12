'use strict';

import {StyleSheet} from "react-native";


export default StyleSheet.create({
    background: {
        backgroundColor: "#1a1a1a",
        padding: 5,
    },

    mainBox:{
        flexDirection: "row",
    },

    HeaderSection:{

        backgroundColor: "grey",

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

    HeaderSectionRow:{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        minHeight: 150,

        flexDirection: "row",
        borderStyle: 'solid',
        borderBottomWidth: 5,
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 0,
    },

    TextSectionMain:{
        margin: 20,
        color: 'blue',
        minHeight: 10,

        padding:5,

        flexDirection: "column",

        alignItems:"center",

    },

    TextSection:{
        margin: 20,
        color: 'blue',
        minHeight: 10,

        padding:5,
        flex: 19,

        flexDirection: "column",

        alignItems:"center",

    },

    TextHeader:{
        color: '#6ab3ff',
        fontSize: 30,
        fontWeight: '700',
        margin: 2,
        backgroundColor: "grey",

        paddingHorizontal: 10,
        paddingVertical: 5,

        borderCurve: "circular",
        borderRadius: 5,
    },

    TextHeaderSmall:{
        color: '#6ab3ff',
        fontSize: 30,
        fontWeight: '500',
        margin: 10,
        padding: 7,
        maxWidth:700,

        textAlign: "center",

        borderBottomWidth: 5,
        borderColor: "#fff",

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
        fontSize: 16,

        paddingHorizontal: 10,
        paddingVertical: 10,

        margin: 10,
        maxWidth:650,
        textAlign:"left",
        justifyContent:"center",
        borderStyle: 'solid',

        borderLeftWidth: 6,
        borderColor: 'white',
        borderWidth: 0,
        backgroundColor: "grey",
        borderCurve: "circular",
        borderRadius: 5,

    },

    TextParagraphRed:{
        color: '#b02020',
        fontWeight: '500',
        fontSize: 18,
        paddingHorizontal: 5,
        margin: 10,
        maxWidth:700,
        textAlign:"left",
        justifyContent:"center",
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderColor: 'white',
        borderRadius: 2,
        borderWidth: 0,
    },

    TextParagraphGreen:{
        color: '#16de0d',
        fontWeight: '500',
        fontSize: 18,
        paddingHorizontal: 5,
        margin: 10,
        maxWidth:700,
        textAlign:"left",
        justifyContent:"center",
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderColor: 'white',
        borderRadius: 2,
        borderWidth: 0,
    },

    textContainer2:{
        flexDirection: "row",
        paddingHorizontal: 5,
        margin: 5,
        padding: 5,
    },

    imageContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    image:{
        resizeMode: "stretch",
        width: 500,
        height: 400,
        flex: 9,

        borderCurve: "circular",
        borderRadius: 50,

    },

    FigureSubText:{
        color: '#6ab3ff',
        backgroundColor: "grey",
        fontWeight: '500',
        textAlign: 'center',
        padding: 3,
        marginTop: 5,
        flex: 1,

        borderCurve: "circular",
        borderRadius: 5,

    },

    buttonContainer:{
        alignSelf: "flex-end",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "right",
    },

    buttonGo: {
        backgroundColor: "#538c50", //007dff
        paddingVertical: 2,
        paddingHorizontal: 2,
        margin: 8,
        minHeight: 70,
        minWidth: 250,
        justifyContent:"center",
        textAlign: "center",

        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,
        flex: 4,
        flexDirection: 'row',
    },

    buttonHelp: {
        backgroundColor: "#6ab3ff", //007dff
        paddingVertical: 2,
        paddingHorizontal: 2,
        margin: 8,
        minHeight: 70,
        minWidth: 250,
        justifyContent:"center",
        textAlign: "center",
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,
        flex: 5,
        flexDirection: 'row',
    },

    buttonBack: {
        backgroundColor: "#adadad", //007dff
        paddingVertical: 2,
        paddingHorizontal: 2,
        margin: 8,
        justifyContent:"center",
        textAlign: "center",
        alignSelf: "center",

        borderStyle: "solid",
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,
        flexDirection: 'row',
    },

    buttonSide: {
        backgroundColor: "#6ab3ff", //007dff
        paddingVertical: 2,
        paddingHorizontal: 2,

        marginTop: 30,
        minHeight: 50,
        minWidth: 100,

        justifyContent:"center",
        textAlign: "center",
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,
    },

    buttonSideThis: {
        backgroundColor: "#538c50", //007dff
        paddingVertical: 2,
        paddingHorizontal: 2,

        marginTop: 30,
        minHeight: 50,
        minWidth: 100,

        justifyContent:"center",
        textAlign: "center",
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,
    },

    buttonQuestion:{
        backgroundColor: "#6ab3ff", //007dff
        paddingVertical: 5,
        paddingHorizontal: 5,
        margin: 10,
        minHeight: 120,
        minWidth: 200,
        maxWidth: 400,

        justifyContent:"center",
        textAlign: "right",
        alignItems: "center",

        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 4,

        flex: 5,
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center',
        textTransform: "uppercase",
        padding: 5,
    },

    buttonTextSmall: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },

    sidebar:{
        minWidth: 10,
        flex: 3,

        margin: 0,
        padding: 50,

        borderWidth: 1,
        borderRightWidth: 5,
        borderColor: "#fff",
    },

    list:{
    },


});