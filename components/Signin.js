import React, {useRef,useEffect, useState} from 'react';
import  { View, Text, StyleSheet,Button, KeyboardAvoidingView, Platform , TextInput,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {ThemeColors} from  './ThemeColors';

export function Signin (props){
    const navigation = useNavigation()
    return(
        <View style={styles.mainView}>
            <Text>Sign In</Text>
            <KeyboardAvoidingView 
                behavior={ Platform.OS === "ios"? "padding" : "height"}
            >
                <View style={styles.innerView}>
                <Text>Email</Text>
                    <TextInput style={styles.input}/>
                    <Text>Password</Text>
                    <TextInput style={styles.input}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Signin</Text>                
                    </TouchableOpacity>
                    <Text>Don't Have An Account?</Text>
                    <Button
                        title="Click Here to sign up"
                        onPress={ ()=>navigation.navigate("Signin")}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}



const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'cyan',
        justifyContent:'center',
        alignItems:'center',
    },innerView:{
        width: 300,
        marginBottom: 90,
    },input:{
        backgroundColor: 'white',
        fontSize: 16,
        padding: 5,
        borderRadius: 4,
    },button:{
        marginVertical: 15,
        backgroundColor: 'red',//ThemeColours.cerise,
        padding: 10,
        borderRadius: 10,
    },buttonText:{
        textAlign: 'center',
    },text:{

    }
});