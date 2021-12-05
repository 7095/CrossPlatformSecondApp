import React from "react";
import { View, TouchableOpacity,Text } from "react-native";

export function Feedback ( props ) {
    return (
        <View>
            <Text> { props.message } </Text>
        </View>
    )
}