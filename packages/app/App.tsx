import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '@my/ui'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PrimaryButton title="Hello, world!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
