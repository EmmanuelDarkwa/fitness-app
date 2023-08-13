import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";


const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.purple;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.orange;

    return(
       <TouchableOpacity
       style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style
       }}
       onPress={props.onPress}
       >
        <Text style={{fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
       </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button;