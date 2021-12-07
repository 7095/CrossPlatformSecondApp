import React, {useRef,useEffect, useState} from 'react';
import  { View, Text, StyleSheet,TouchableOpacity  } from "react-native"
import { useNavigation } from '@react-navigation/core';


export function Home (props){
    const navigation = useNavigation()

    useEffect( ( ) => {

        if(!props.auth) {
            navigation.reset({ index: 0, routes: [ {name: 'Signin'} ] })
        }
    },[ props.auth])

    const data = { time: new Date().getTime(), user: Math.random() * 100 }
    return(  
        <View>
            <Text> home</Text>
            <TouchableOpacity style={styles.button} onPress={ () => { props.add('users', data ) } }>
                <Text> Add more </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: 'cyan',
      padding: 10,
    },
  }) 