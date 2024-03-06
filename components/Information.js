import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function Information({tittle,imageSource,desc}) {
    return (
        <View>
            <Image style={styles.img} source={imageSource}/>
            <View style={styles.descTittle}>
                <Text style={styles.tittle}>{tittle}</Text>
                <Text style={styles.textDesc}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width:'100%'
    },
    descTittle: {
        alignItems:'center',
        paddingVertical: 20
    },
    tittle: {
        fontSize: 30
    },
    textDesc: {
        fontSize: 20
    }
});