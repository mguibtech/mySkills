import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ButtonAdd({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#a370f7",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold"
    },
})