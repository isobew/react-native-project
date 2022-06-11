import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78851164?v=4';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="pink"/>
      <View style={styles.view}>
        <Image accessibilityLabel="Ilustração de auto-retrato de Isabella Firmino - desenho de uma moça de cabelos longos pretos e roupas pretas, usando óculos. Desenho de fundo amarelo." style={styles.avatar} source={{uri: imageProfileGithub}}/>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1, //expandir para a tela inteira
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: "200",
    color: "#000",
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100
  }
});
