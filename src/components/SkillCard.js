import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function SkillCard({skill}) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 22,
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        borderRadius: 80,
        padding: 10,
        alignContent: "center",
        alignItems: "center",
        marginVertical: 5
    }
})