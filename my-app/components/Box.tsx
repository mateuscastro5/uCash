import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

interface BoxProps {
    
}

const Box = () => {
    const [number, onChangeNumber] = React.useState('');
    title: string;
    textStyles?: string;
    containerStyles?: string;

    return (
      <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Meta'
        keyboardType='numeric'
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderwidth: 1,
        padding: 10,
    },
});

export default Box;
