import React from "react";
import { View, TouchableOpacity, StyleSheet} from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import mapa from "../../assets/mapa.png";

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

  <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text 
          style={{
            fontFamily: "Lato",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
            marginBottom: 20,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}
        > 
          Bem vinde ao Departamento de Computação da UFSCar!
        </Text>
      </View>

      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text 
          style={{
            fontFamily: "Lato",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
            marginBottom: 10,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}
        > 
          Selecione a opção desejada
        </Text>
      </View>

      <View style={{flexDirection: "row", flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            flex:1,
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 50,
            borderRadius: 10,
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '48%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("SecondScreen");
          }}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
            Mapa do DC
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex:2,
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 50,
            borderRadius: 10,
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '48%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("Professores");
          }}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          Professores
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
