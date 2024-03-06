import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function ColorChange({color,onIncrease,onDecrease}) {
    return (
        <View style={{
            margin:20
        }}>
            <Text style={{
                fontSize:20,
            }}>{color}</Text>
            <Button title={`${color} Arttır`} onPress={() => onIncrease()}></Button>
            <Button title={`${color} Azalt`} onPress={() => onDecrease()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})