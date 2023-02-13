import React, { useState } from "react";
import {
    TextInput,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    FlatList,
    View
} from 'react-native';
import { ButtonAdd } from "../components/ButtonAdd";
import { SkillCard } from "../components/SkillCard";

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);


    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Guibson</Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#c3c3c3"
                onChangeText={setNewSkill}
            />

            <ButtonAdd
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 30 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />

        </View>
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
})