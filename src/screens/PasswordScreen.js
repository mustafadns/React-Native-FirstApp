import { StyleSheet, Text, View , TextInput} from 'react-native'
import React , { useState }from 'react'

export default function PasswordScreen() {
    const [password, setPasword] = useState('')
    return (
        <View style={styles.main}>
            <Text>Şifrenizi Giriniz :</Text>
            <TextInput style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPasword(newValue)}
            />
            { password.length < 8 ? (
                <Text>Şifreniz En Az 8 Karakter Olmalıdır</Text>
            ):null}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin:20
    },
    input: {
        borderColor:'black',
        borderWidth:1,
        padding:8,
    }
})