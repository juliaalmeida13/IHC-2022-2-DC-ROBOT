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
          PyLadies
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
          O grupo PyLadies São Carlos foi oficializado no dia 15 de Novembro de 2014 por alunas da computação da UFSCar. Atualmente, é formado por cerca de 60 membros das mais diversas áreas do conhecimento (humanas, biológicas e exatas). É composto por maioria feminina, mas também há uma parcela pequena de membros homens, os quais entendem as causas firmadas e se comprometem a ajudar. A missão do grupo é incentivar a entrada de mais mulheres às áreas de programação, além de manter uma comunidade ativa e diversificada do Python. Para isso, o PyLadies São Carlos atua em escolas ensinando programação de maneira lúdica às meninas do ensino médio, para incentivá-las a entrarem nessa área e quebrar estereótipos relacionados à racionalidade, além de oferecer minicursos e palestras dos mais variados assuntos para a população no geral e participando em eventos de tecnologia e oficinas.


        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}