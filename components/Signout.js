import React from "react"
import {StyleSheet, TouchableOpacity,Text } from "react-native"

export function Signout ( props ) {
    return (
        <TouchableOpacity>
            <Text style={styles.SignoutText} >Signout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({

    SignoutText:{
        color:"black",
    },

})