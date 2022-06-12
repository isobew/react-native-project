import React from "react";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

let lightColor = '#fff';
let colorGithub = '#010409';
let colorFontGithub = '#C9D1D9';
let colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78851164?v=4';
const urlToMyGithub = 'https://github.com/isobew'

export default function App() {

  const handlePressGoToGithub = async ()=>{
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('abrindo link');
      await Linking.openURL(urlToMyGithub);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="pink"/>
      <View style={styles.view}>
        {/* <Text onPress={click}>Botao</Text> */}
        <View style={styles.mainContent}>
          <Image accessibilityLabel="Ilustração de auto-retrato de Isabella Firmino - desenho de uma moça de cabelos longos pretos e roupas pretas, usando óculos. Desenho de fundo amarelo." style={styles.avatar} source={{uri: imageProfileGithub}}/>
          <Text accessibilityLabel="Nome: Isabella Firmino" style={[styles.text, styles.name]}>Isabella Firmino</Text>
          <Text accessibilityLabel="Nickname: isobew" style={[styles.text, styles.nickname]}>@isobew</Text>
          <Text accessibilityLabel="Descrição: Full Stack Web Developer at Instituto Alpha Lumen" style={[styles.text, styles.description]}>Full Stack Web Developer at Instituto Alpha Lumen</Text>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
            <Text style={styles.textBtn}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: lightColor,
    flex: 1, //expandir para a tela inteira
    alignItems: "center",
  },
  view: {
    alignItems: 'center',
    height: vh(100),
    justifyContent: 'space-evenly',
    padding: 20
  },
  mainContent: {
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    color: colorDarkFontGithub,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "400"
  },
  nickname: {
    fontSize: 18,
    color: colorFontGithub
  },
  description: {
    fontSize: 14
  },
  textBtn: { 
    color: lightColor
  },
  button: {
    marginTop: 50,
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 20
  }
});

// function click() {
//   console.log(colorr)
//   colorr = colorGithub
//   console.log(colorr)
//   console.log("caiu aqui");
//   styles.container.alignItems
//   console.log(styles.container.alignItems)
// }