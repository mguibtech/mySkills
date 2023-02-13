import React, { useState } from "react";
import {
    TextInput,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    TouchableOpacity
} from 'react-native'

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);


    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Guibson</Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#c3c3c3"
                onChangeText={setNewSkill}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 30 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))

            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",

    },
    input: {
        backgroundColor: '#1f1e25',
        color: "#fff",
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 8,
    },
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