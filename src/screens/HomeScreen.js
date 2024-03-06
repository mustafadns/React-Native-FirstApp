import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ana Sayfa</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
        title="Kurslars Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Sayaç Uygulaması')}
      />
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate('Kutu Uygulaması')}
      />
      <Button
        title="Renk Değiştirme Uygulaması"
        onPress={() => navigation.navigate('Renk Değiştirme Uygulaması')}
      />
      <Button
        title="Şifre Ekranı"
        onPress={() => navigation.navigate('Şifre Ekranı')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})