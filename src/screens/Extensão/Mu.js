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
          M@U
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
          O Grupo de Estudos Maratona at UFSCar (M@U), é o resultado do interesse de vários alunos de Graduação em aprofundar seus conhecimentos na Computação. Para isso, nós participamos da Maratona de Programação, uma competição com fases Regional, Nacional e Mundial. Por meio de reuniões semanais e simulados, nós exploramos diferentes assuntos da Ciência e da Engenharia de Computação. Assim, o estudo para a Maratona está alinhado com o conhecimento que um profissional de computação deve ter. De fato, várias empresas de tecnologia aplicam questões do mesmo estilo da Maratona em seus processos seletivos ou mesmo promovem suas próprias competições, como o Facebook Hacker Cup e o Google Code Jam. Dessa forma, os membros da maratona já estão treinando para os processos seletivos desse tipo de empresa. Se você quiser entender o que isso tem a ver com Programação e Ciência da Computação ou ainda quiser compartilhar suas descobertas, venha ser M@U com a gente.

        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}