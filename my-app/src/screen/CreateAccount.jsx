import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Ai sim!</Text>
          <Text style={styles.headingText}>Vamos criar a sua conta</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="briefcase" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Empresa"
            />
          </View>
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
              placeholder="Crie sua senha"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Repita sua senha"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Criar Conta</Text>
          </TouchableOpacity>
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
  createAccountButton: {
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
  createAccountButtonText: {
    fontSize: 18,
    color: '#3A3A3A',
  },
});

export default CreateAccount;