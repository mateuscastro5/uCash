import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';  // Importa o Axios para requisições HTTP

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar mostrar/ocultar senha
  const [errors, setErrors] = useState({ cpf: false, password: false }); // Estado para erros de obrigatoriedade

  const handleLogin = () => {
    // Validação dos campos obrigatórios
    if (!cpf || cpf.length !== 11) {
      setErrors((prev) => ({ ...prev, cpf: true }));
      Alert.alert('Erro', 'Por favor, insira um CPF válido de 11 dígitos.');
      return;
    }
    if (!password || password.length < 6) {
      setErrors((prev) => ({ ...prev, password: true }));
      Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    console.log("Tentando logar com:", { cpf, password });

    // Requisição ao backend para verificar as credenciais
    axios.post('http://192.168.20.122:5001/login', { cpf, password })
      .then(response => {
        console.log("Resposta do backend:", response.data);
        if (response.data.status === 'Ok') {
          navigation.navigate('MainNav'); // Redireciona para a tela principal se o login for bem-sucedido
        } else {
          Alert.alert('Erro', response.data.error || 'CPF ou senha incorretos.');
        }
      })
      .catch(error => {
        console.error("Erro na requisição:", error.response ? error.response.data : error.message);
        Alert.alert('Erro', 'Falha ao tentar login. Verifique suas credenciais.');
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Alterna entre exibir e ocultar senha
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Bem-vindo!</Text>
          <Text style={styles.headingText}>Faça login para continuar</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Ionicons name="person" size={24} color="#3A3A3A" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="CPF"
                keyboardType="numeric"
                maxLength={11}
                value={cpf}
                onChangeText={(text) => {
                  setCpf(text.replace(/[^0-9]/g, '')); // Permite apenas números no CPF
                  setErrors((prev) => ({ ...prev, cpf: false }));
                }}
              />
            </View>
            {errors.cpf && <Text style={styles.errorText}>*</Text>}
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed" size={24} color="#3A3A3A" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrors((prev) => ({ ...prev, password: false }));
                }}
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#3A3A3A" />
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.errorText}>*</Text>}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
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
    backgroundColor: '#31FF9C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#3A3A3A',
  },
  createAccountButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
  },
  createAccountButtonText: {
    fontSize: 18,
    color: '#3A3A3A',
  },
  logo: {
    width: 160,
    height: 130,
    resizeMode: 'contain',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default HomeScreen;
