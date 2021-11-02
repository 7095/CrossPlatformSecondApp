import React from "react"
import  { View, Text, StyleSheet,Button } from "react-native"
import { useNavigation } from "@react-navigation/native"


export function Signup (props){
    
const navigation = useNavigation();
    
    return(
        <View>
            <Text> Sign Up</Text>
            <Button title="Click Here to sign in" onPress={ ()=>navigation.navigate("Signin")}/>
        </View>
    )
}