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
        middleContent="Lista de Professores"
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

      <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text 
          style={{
            fontFamily: "Lato",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
            marginTop: 30,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}>
          Lista de Professores no DC
        </Text>
      </View>
      <View style={{flexDirection: "row", flexWrap: 'wrap'}}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 50,
            borderRadius: 10,
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("Descricao");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
            Prof. Dr. Vânia Paula de Almeida Neris
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}