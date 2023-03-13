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
import minhaImagem from "../../assets/Chat-bot-pana.png";

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

        <Image source={minhaImagem} style={{ width: 350, height: 350 }} />

        <Section style={{ position: "absolute", bottom: 10 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              bla bla bla
            </Text>
            <Button
              text="Iniciar"
              onPress={() => {
                navigation.navigate("SecondScreen");
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