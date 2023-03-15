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
          PET-ENC
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
          O PET da Engenharia de Computação da Universidade Federal de São Carlos foi criado em 2008, entrando em atividade em 2009 para apoiar atividades acadêmicas que integram ensino, pesquisa e extensão, tendo como principal objetivo difundir e agregar valor ao curso. Baseado em pesquisas técnicas e mapeamento de situações problemas, o grupo organiza palestras, eventos e minicursos com o objetivo de informar e mostrar ao público os principais focos do curso no mercado de trabalho.

Buscando sempre aprimorar os resultados obtidos, o PET EnC baseia sua organização em técnicas de gerenciamento de projetos, definidas pelos princípios do Project Management Institute (PMI). Estando aliado ao foco específico do curso na UFSCar ­­– Automação e Controle –- e, assim, são realizados mapeamentos de situações problema que envolvam soluções de automação computacionais em indústrias. 

Além das situações problema, o grupo é responsável por realizar pesquisas técnicas envolvendo diferentes tipos de ferramentas, linguagens e conhecimento sobre hardware, sempre voltado para conceitos aplicáveis em sistemas de automação e controle. Dentre os assuntos abordados, destacam-se Redes de Petri, Lógica Fuzzy e Algoritmos Genéticos.

        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}