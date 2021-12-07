import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ThemeColors } from './ThemeColors';
import { Feedback } from './Feedback';



export function Signup(props) {
    const [validEmail, setValidEmail] = useState()
    const [validPassword, setValidPassword] = useState()
    const [validForm, setValidForm] = useState(false)

    const [email, setEmail] = useState()
    const [passward, setPassword] = useState()

    const navigation = useNavigation()


    const validateEmail = (emailValid) => {
        if (emailValid.indexOf('@') > 0) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
        setEmail(emailValid)
    }

    const validatePassword = (passwardVal) => {
        if (passwardVal.length >= 8) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
        setPassword(passwardVal)
    }

    const submitHandler = () => {
        props.handler(email, passward)
    }

    useEffect(() => {
        if (validEmail && validPassword) {
            setValidForm(true)
        } else {
            setValidForm(false)
        }

    }, [validEmail, validPassword])
    useEffect(() => {
        if (props.auth === true) {
            navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
        }

    }, [props.auth])

    return (
        <ImageBackground style= {styles.backgroundImage} source={require("../assets/Background.png")}>
            <View style={styles.mainView}>
                <Image style={styles.headerImage} source={require("../assets/signup-icon.jpg")} />
                <Text style={styles.headerTitle}>Sign Up</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"} >
                    <View style={styles.innerView}>
                        <Text>Email</Text>
                        <TextInput style={styles.input} onChangeText={(val) => validateEmail(val)} />
                        <Text>Password</Text>
                        <TextInput style={styles.input}
                            onChangeText={(val) => validatePassword(val)}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={(validForm) ? styles.button : styles.buttonDisabled}
                            disabled={(validForm) ? false : true}
                            onPress={() => submitHandler()}
                        >
                            <Text style={styles.buttonText}>Signup</Text>
                        </TouchableOpacity>
                        <Feedback message={props.error} />
                        <Text>Already Have An Account?</Text>
                        <Button
                            title="Click Here to sign in"
                            onPress={() => navigation.navigate("Signin")}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ImageBackground >
    )
}


const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },mainView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        //opacity: 0.8,
        width:'80%',
        height:'60%'
    },
    innerView: {
        width: 300,
        marginBottom: 90,
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        padding: 5,
        borderRadius: 4,
    },
    button: {
        marginVertical: 15,
        backgroundColor: ThemeColors.russet,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
    },
    text: {

    },
    buttonDisabled: {
        marginVertical: 15,
        backgroundColor: ThemeColors.maizeCrayola,
        padding: 10,
        borderRadius: 10,
        opacity: 0.2,
    }, headerImage: {
        width: 50,
        height: 50,
        marginHorizontal: 10,

    }, headerTitle: {
        flexDirection: 'row',
    }
});