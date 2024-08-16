import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CreateAccount = () => {
  const [cpf, setCpf] = useState('');
  const [enterprise, setEnterprise] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para exibir ou ocultar a senha
  const [passwordError, setPasswordError] = useState(false); // Estado para o erro de senha

  const handleSubmit = () => {
    // Validação no frontend
    if (!cpf || !enterprise || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    if (password.length < 6) {
      setPasswordError(true); // Mostra o asterisco vermelho se a senha for menor que 6 dígitos
      return;
    } else {
      setPasswordError(false);
    }

    if (password !== passwordVerify) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    const userData = {
      cpf,
      enterprise,
      password,
    };

    // Simulação de envio de dados para o backend
    Alert.alert("Sucesso", "Conta criada com sucesso!");
    console.log(userData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
              value={enterprise}
              onChangeText={(text) => setEnterprise(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="CPF"
              keyboardType="numeric"
              value={cpf}
              maxLength={11}  // Limita o CPF para 11 dígitos
              onChangeText={(text) => setCpf(text.replace(/[^0-9]/g, ''))}  // Garante que apenas números sejam digitados
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Crie sua senha"
              secureTextEntry={!showPassword}  // Controla se a senha será exibida ou não
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#3A3A3A" />
            </TouchableOpacity>
            {passwordError && <Text style={styles.errorText}>*</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#3A3A3A" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Repita sua senha"
              secureTextEntry={!showPassword}  // Usa o mesmo controle para a senha de confirmação
              value={passwordVerify}
              onChangeText={(text) => setPasswordVerify(text)}
            />
            <TouchableOpacity onPress={toggleShowPassword}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#3A3A3A" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleSubmit}>
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
  createAccountButtonText: {
    fontSize: 18,
    color: '#3A3A3A',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    marginLeft: 5,
  },
});

export default CreateAccount;
