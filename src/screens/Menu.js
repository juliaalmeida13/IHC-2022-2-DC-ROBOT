import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();



  return (
    <Layout>
      <TopNav
        middleContent="Menu"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
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
        <Text fontWeight="bold" style={{ marginBottom: 20 }}>
          Selecione a funcionalidade
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#2EC4B6",
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("SecondScreen");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Mapa do DC
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#2EC4B6",
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("professores");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
          Professores
          </Text>
        </TouchableOpacity>

        
      </View>
    </Layout>
  );
}