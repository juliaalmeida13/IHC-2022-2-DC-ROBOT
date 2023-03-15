import React from "react";
import {StyleSheet, View, Linking, Image} from "react-native";

import {
  Layout,
  TopNav,
  Text,
  Button,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import minhaImagem from "../../assets/image-light-mode.png";
import minhaImagemEscura from "../../assets/image-dark-mode.png";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Robô do DC"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "Lato",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -100,
            marginBottom: 50,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}
        >
          Bem vinde ao Departamento de Computação da UFSCar!
        </Text> 
        <Image 
          source={isDarkmode ? minhaImagemEscura : minhaImagem} style={{ width: 950, height: 420}} />

        <Section style={{ position: "absolute", bottom: 10 }}>
          <SectionContent>

            <Button
              style = {styles.buttonLight}
              color = {isDarkmode ? '#9C86B8' : '#A0BDC6'}
            
              text = "Toque aqui para iniciar"
              onPress={() => {
                navigation.navigate("Menu");
              }}
              textStyle = {{color: isDarkmode ? '#D9D9D9' : '#464444'}}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "Lato",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  button:{
    marginTop: 10
  },
});
