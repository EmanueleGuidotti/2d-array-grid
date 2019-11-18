import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import MainContainer from "./src/containers/main.container";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainContainer></MainContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
