import React from 'react'
import { Button } from 'react-native'

interface ButtonProps {
  title: string
  onPress?: () => void
}

const emptyFunction = () => {}

export default function PrimaryButton({ title, onPress }: ButtonProps) {
  return (
    <Button
      title={title}
      onPress={onPress || emptyFunction}
      color="lightsalmon"
    />
  )
}
