import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCadProps extends TouchableOpacityProps {
    skill: string
}

export function SkillCard({skill, ...rest} : SkillCadProps) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill} {...rest}>
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