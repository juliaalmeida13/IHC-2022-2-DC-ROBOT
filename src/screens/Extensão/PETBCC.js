import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();

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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            >
              <Ionicons
                name={isDarkmode ? "sunny" : "moon"}
                size={20}
                color={isDarkmode ? themeColor.white100 : themeColor.dark}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // Muda o idioma para 'en' ou 'pt'
                const newLng = i18n.language === 'en' ? 'pt' : 'en';
                i18n.changeLanguage(newLng);
              }}
            >
              <Ionicons
                name="language"
                size={20}
                color={isDarkmode ? themeColor.white100 : themeColor.dark}
              />
            </TouchableOpacity>
          </View>
        }
        
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
          {t("TPETBCC")}
        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}