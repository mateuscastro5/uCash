import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors'
import { DarkTheme } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Ola,</Text>
        <Text style={styles.headingText}>bem-vindo ao seu Space</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
        <TouchableOpacity onPress={() => handleForgotPassword()}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.createAccountButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headingText: { 
    fontSize: 38,
  },
  textContainer: {
    margin: 40,
  },
  formContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  input: {
    borderWidth: 1,
    maxWidth: 300,
    borderRadius: 20,
    paddingHorizontal: 30, 
    height: 40,
    marginBottom: 10,
    marginVertical: 20,
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#373737', 
    textDecorationLine: 'none', 
    alignSelf: 'center', 
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#31FF9C', //Verde
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200, // largura igual para os botões
  },
  loginButtonText: {
    fontSize: 18,
    color: '#373737', //Preto
  },
  createAccountButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: '#31FF9C',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200, // largura igual para os botões
  },
  createAccountButtonText: {
    fontSize: 18,
    color: '#373737',
  },
})