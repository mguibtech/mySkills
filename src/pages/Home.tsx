import React, { useState, useEffect } from "react";
import {
    TextInput,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    FlatList,
    View,
} from 'react-native';
import { ButtonAdd } from "../components/ButtonAdd";
import { SkillCard } from "../components/SkillCard";

interface SkillData{
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState<string>('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('')


    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
        setNewSkill('')
        
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        console.log(currentHour)
        if(currentHour < 12){
            setGretting('Good morning')
        }else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon')
        }else{
            setGretting('Good night')
        }
    }, [])

    return (
        <View style={styles.container}>
            

            <Text style={styles.title}>Welcome, Guibson</Text>
            
            <Text style={styles.greetings}>
                {gretting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#c3c3c3"
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <ButtonAdd
                title="Add"
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 30 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard onPress={()=> handleRemoveSkill(item.id)} skill={item.name} />
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
    greetings:{
        color: '#fff',
        fontSize: 16
    }

})