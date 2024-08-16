import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca para os ícones

const { height: screenHeight } = Dimensions.get('window'); // Pega a altura da tela

const MainNav = () => {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        {/* Logo */}
        <Text style={styles.logo}>SPACE</Text>
        
        {/* Icons: Notification and Menu */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="#FFFFFF" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        contentContainerStyle={[styles.scrollViewContent, { minHeight: screenHeight * 3 }]} // Simulando rolagem infinita
        showsVerticalScrollIndicator={false} // Esconde a barra de rolagem, opcional
      >
        {/* User Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>olá, Mateus</Text>
          <Text style={styles.subText}>supervisor</Text>
        </View>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Fundo escuro como na imagem
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    color: '#00FF88', // Cor verde da logo "SPACE"
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginLeft: 15,
  },
  scrollViewContent: {
    paddingBottom: 20, // Para evitar que o conteúdo colida com o final da tela
  },
  greetingContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  greetingText: {
    color: '#00FF88', // Cor verde do "olá, Mateus"
    fontSize: 26,
    fontWeight: 'bold',
  },
  subText: {
    color: '#A9A9A9', // Cor cinza da palavra "supervisor"
    fontSize: 16,
    marginTop: 5,
  },
  contentArea: {
    backgroundColor: '#2C2C2C', // Fundo cinza escuro da área de conteúdo
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
    justifyContent: 'center', // Centraliza o conteúdo dentro da área principal
    alignItems: 'center',
  },
  contentText: {
    color: '#FFFFFF', // Cor branca para o texto dos itens
    fontSize: 18,
  },
});

export default MainNav;
