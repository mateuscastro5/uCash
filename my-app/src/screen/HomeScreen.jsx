import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors'
import { DarkTheme } from '@react-navigation/native'
import { useFonts } from 'expo-font'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Ola,</Text>
        <Text style={styles.headingText}>bem-vindo ao seu Space</Text>
      </View>

      {/*form */}

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // adicionado
  },
  headingText: {
    fontSize: 38,
  },
  textContainer: {
    marginVertical: 40,
    marginLeft: 22,
  }, // removido flex: 1
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    maxWidth: 200,
    marginLeft: 22,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
})