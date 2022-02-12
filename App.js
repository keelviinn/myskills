import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddSkill() {
    setSkills(oldSkill => [...oldSkill, newSkill]);
    setNewSkill('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Skills</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Type here your skills!" 
        placeholderTextColor={'#999'}
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddSkill}
      >
        <Text style={styles.buttonText}>Add Skill</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {skills.map(skill => (
        <Text key={skill} style={styles.item} >{skill}</Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 50,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  }
});