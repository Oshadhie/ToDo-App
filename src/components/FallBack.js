import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const FallBack = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image source={require("../../assets/icon.png")} 
        style={{height:300, width:300}}
      />
      <Text>Start Adding Your Task</Text>
    </View>
  )
}

export default FallBack

const styles = StyleSheet.create({})