import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { useState } from 'react'

const kpiWeights = {
  weightVolRGB: 0.2,
  weightVolPremium: 0.1,
  weightVolTotal: 0.2
}

const salarioBase = 1745

const Box = () => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [salaryResult, setSalaryResult] = useState('')
  const [description, setDescription] = useState('')
  

  const calculateKPI = {
    kpiWeights(weightVolPremium: number, weightVolTotal: number, weightVolRGB: number): void{
      
      calculateVolRGB: function() {
      return salarioBase + 1 + weightVolPremium
      }
    }, 
    
    
}


export class Box extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Box
