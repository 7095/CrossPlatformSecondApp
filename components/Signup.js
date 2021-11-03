import React, {useRef,useEffect, useState} from 'react';
import  { View, Text, StyleSheet,Button, KeyboardAvoidingView, Platform , TextInput,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {ThemeColors} from  './ThemeColors';



export function Signup (props){
    const [ validEmail, setValidEmail ]= useState()
    const [ validPassword, setValidPassword ]= useState()
    const [ validForm, setValidForm] = useState(false)

    const [email, setEmail]= useState()
    const [ passward, setPassword] = useState()

    const navigation = useNavigation()


    const validateEmail = ( emailValid ) => {
        if( emailValid.indexOf('@' ) > 0 ){
            setValidEmail( true )
        }else{
            setValidEmail ( false )
        }
        setEmail( emailValid)
    }

    const validatePassword = (passwardVal) => {
        if( passwardVal.length>=8){
            setValidPassword(true)
        }else{
            setValidPassword(false)
        }
        setPassword(passwardVal)
    }

    const submitHandler = () =>{
        props.handler( email, passward )
    }

    useEffect( () => {
        if(validEmail && validPassword){
            setValidForm( true )
        }else{
            setValidForm( false )
        }

    },[validEmail,validPassword])
    useEffect( () =>{
        if(props.auth=== true){
            navigation.reset({index:0, routes: [ { name: 'Home' } ] } )
        }

    },[props.auth])
    
    return(
        <View style={styles.mainView}>
            <Text>Sign Up</Text>
            <KeyboardAvoidingView 
                behavior={ Platform.OS === "ios"? "padding" : "height"}
            >
                <View style={styles.innerView}>
                    <Text>Email</Text>
                    <TextInput style={styles.input} onChangeText={ (val) =>  validateEmail ( val ) } />
                    <Text>Password</Text>
                    <TextInput style={styles.input} 
                    onChangeText={ (val) =>  validatePassword ( val ) } 
                    secureTextEntry={true}
                    />
                    <TouchableOpacity 
                    style={ (validForm ) ? styles.button: styles.buttonDisabled}
                    disabled={(validForm) ? false:true}
                    onPress={ () => submitHandler() } 
                    >
                        <Text style={styles.buttonText}>Signup</Text>                
                    </TouchableOpacity>
                    <Text>Already Have An Account?</Text>
                    <Button
                        title="Click Here to sign in"
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
    },
    innerView:{
        width: 300,
        marginBottom: 90,
    },
    input:{
        backgroundColor: 'white',
        fontSize: 16,
        padding: 5,
        borderRadius: 4,
    },
    button:{
        marginVertical: 15,
        backgroundColor:ThemeColors.russet,        
        padding: 10,
        borderRadius: 10,
    },
    buttonText:{
        textAlign: 'center',
    },
    text:{

    },
    buttonDisabled:{
        marginVertical: 15,
        backgroundColor: ThemeColors.maizeCrayola,
        padding: 10,
        borderRadius: 10,
        opacity:0.2,
    }
});