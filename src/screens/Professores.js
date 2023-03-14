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

  const chamadaAPI = async (localizacao) => {
    console.log('Chamando API...');
    fetch(`http://192.168.0.200:5000/ros/goTo/${localizacao}`).catch((error)=> console.log(error));
  };

  return (
    <Layout>
      <TopNav
        middleContent="Professores"
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
          Escolha o lugar em que gostaria de ir
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#2EC4B6",
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
          onPress={() => chamadaAPI("LE-1")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            LE-1
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
          onPress={() => chamadaAPI("LE-2")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
          LE-2
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
          onPress={() => chamadaAPI("LE-3")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
          LE-3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#2EC4B6",
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
          onPress={() => chamadaAPI("LE-4")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
          LE-4
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}