import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Welcome({ setStep, navigation }) {
  return (
    <View>
      <Text>Welcome to the </Text>
      <Text>Yoga Collective</Text>
      <Text>
        For free, you can enjoy classes and workshops from talented instructors
        worldwide. Find certified online classes, or nearby!
      </Text>
      <TouchableOpacity onPress={setStep}>
        <Text>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Already Have an Account?</Text>
      </TouchableOpacity>
    </View>
  );
}
