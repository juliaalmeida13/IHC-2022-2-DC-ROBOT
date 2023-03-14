import React from "react";
import { View, Linking, Image } from "react-native";

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
import minhaImagem from "../../assets/Chat-bot-pana-light-mode.png";
import minhaImagemEscura from "../../assets/Chat-bot-pana-dark-mode.png";

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
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -100,
            marginBottom: 50,
          }}
        >
          Bem vinde ao Departamento de Computação da UFSCar!
        </Text>

        <Image source={isDarkmode ? minhaImagemEscura : minhaImagem} style={{ width: 600, height: 600}} />

        <Section style={{ position: "absolute", bottom: 10 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
            </Text>
            <Button
              text="Toque aqui para iniciar"
              onPress={() => {
                navigation.navigate("Menu");
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}