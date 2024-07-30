import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Bem-vindo!</Text>
          <Text style={styles.headingText}>Faça login para continuar</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="CPF"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.createAccountButton, { marginTop: 20 }]} onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.createAccountButtonText}>Criar Conta</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/SPACE.png')}
            style={styles.logo}
            onError={(error) => console.error('Erro ao carregar imagem:', error)}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F3F3',
  },
  keyboardAvoidingView: {
    justifyContent: 'center',
    padding: 20,
  },
  headingText: {
    fontSize: 38,
  },
  textContainer: {
    margin: 40,
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    maxWidth: 300,
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
    marginVertical: 20,
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  },
  inputIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#31FF9C', // Verde
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
    color: '#3A3A3A',
  },
  createAccountButton: {
    alignItems: 'center',
    
    backgroundColor: '#fff', // Verde
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
  createAccountButtonText: {
    fontSize: 18,
    color: '#3A3A3A',
  },
  logo: {
    width: 10,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default HomeScreen;