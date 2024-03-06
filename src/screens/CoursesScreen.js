import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'


export default function CoursesScreen() {
    const courses = [
        {name:"Angular" , id:1},
        {name:"React JS" , id:2},
        {name:"C#" , id:3},
        {name:"JavaScript" , id:4},
        {name:"Python" , id:5},
    ];
    return (
        <FlatList 
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <Text style={styles.content}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    content: {
        fontSize: 20,
        backgroundColor:'yellow',
        marginVertical: 10,
        padding: 20,
    },
})