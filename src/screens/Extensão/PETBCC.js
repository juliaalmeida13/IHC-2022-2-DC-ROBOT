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
        middleContent=""
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
         PET-BCC
        </Text>
      </View>
      <View style={{alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#D9D9D9',
            paddingHorizontal: 50,
            paddingVertical: 50,
            borderRadius: 10,
            alignSelf: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            textAlign: 'center',
          }}
        >
          <Text style={{ color: '#464444', fontWeight: "bold", fontSize: 18 }}>
          O grupo PET do curso de Bacharelado em Ciência da Computação (PET-BCC) da Universidade Federal de São Carlos (UFSCar), campus São Carlos, iniciou suas atividades em outubro de 2009 ao ser contemplado no lote 2 do edital nº 05. Uma particularidade desse edital é que a chamada foi para grupos temáticos, isto é, além de estarem vinculados a um curso de graduação, também deveriam ter um tema para nortear suas atividades e projetos. O tema do PET-BCC é desenvolvimento de software.

        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}