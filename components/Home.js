import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native"
import { useNavigation } from '@react-navigation/core';

import * as Font from 'expo-font'


export function Home(props) {
    const navigation = useNavigation()
    const [listData, setListData] = useState()

    useEffect(() => {

        if (!props.auth) {
            navigation.reset({ index: 0, routes: [{ name: 'Signin' }] })
        }
        //console.log( props.user )
    }, [props.auth])

    useEffect(() => {
        setListData(props.data)

    }, [props.data])

    const data = { time: new Date().getTime(), user: Math.random() * 100 }

    const renderItem = ({ item }) => {
        <View><Text> {item.time} </Text></View>
    }

    // a video for background image setup    https://www.youtube.com/?v=fO4wOAIfLw4

    return (
        <ImageBackground style={styles.backgroundImage} source={require("../assets/car2.png")} >
            <View style={styles.inner}>
                <ImageBackground source={require("../assets/Car.png")} style={styles.headerTitle}>
                    <Image style={styles.headerImage} source={require("../assets/spanner.png")} />
                    <Text style={styles.headerText}>Select A Job To Do</Text>
                </ImageBackground>
                <TouchableOpacity style={styles.button} onPress={() => { props.add('users', data) }}>
                    <Text> Add </Text>
                </TouchableOpacity>
                <FlatList data={listData} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#84BC9C',
        padding: 10,
    },
    headerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'cyan',
        fontSize: 30,
    },
    backgroundImage: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9

    },
    headerImage: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',
        display: 'flex',
        padding: 5,
        opacity: 10,

    },
    inner: {
        width: '85%',
        height: '90%',
        backgroundColor: 'rgb(255,255,255,.7)'
    }
})