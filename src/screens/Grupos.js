import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
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
        middleContent="Grupos de extensão"
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
            marginTop: -100,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}>

          

        </Text>
      </View>

      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
            position: 'relative', // definir como um elemento de posicionamento relativo
          }}
          onPress={() => {
            navigation.navigate("Cati");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold", }}>
          CATI Jr
          </Text>

          <Image
          source={require('../../assets/Extensão/catijr.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />
        </TouchableOpacity>
      </View>


      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("Gamso");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          GAMSo
          </Text>

          <Image
          source={require('../../assets/Extensão/gamso.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>


      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("Mu");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          M@U
          </Text>

          <Image
          source={require('../../assets/Extensão/mau.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("PETBCC");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          PET-BCC
          </Text>
          <Image
          source={require('../../assets/Extensão/petbcc.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("PETENC");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          PET-ENC
          </Text>

          <Image
          source={require('../../assets/Extensão/petenc.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("PyLadies");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          PyLadies
          </Text>

          <Image
          source={require('../../assets/Extensão/pyladies.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 1, justifyContent: 'center', // alinhar no centro horizontal
  alignItems: 'center', }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            marginHorizontal: '1%',
            marginTop: 20,
            margin: 10,
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("SECOMP");
          }}
        >
          <Text style={{flex:1, color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          SECOMP
          </Text>

          <Image
          source={require('../../assets/Extensão/secomp.png')}
          style={{
            position: 'absolute', // definir como um elemento de posicionamento absoluto
            right: 210, // posicionar na borda direita do botão com um offset de 10 pixels
            top: 5, // posicionar no topo do botão
            width: 50, // definir a largura da imagem
            height: 50, // definir a altura da imagem
    }}
  />

        </TouchableOpacity>
      </View>

    </Layout>
  );
}