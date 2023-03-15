import React from "react";
import { View, TouchableOpacity, StyleSheet, createContext, useContext, useState} from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
//import mapa from "../../assets/mapa.png";


export default function ({ navigation }) {
  const { t, i18n } = useTranslation();
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
          {t("welcomeMessage")}
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
          {t("selectOption")}
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
          {t("mapTitle")}
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
            minWidth: '20%',
            textAlign: 'center',
          }}
          onPress={() => {
            navigation.navigate("Grupos");
          }}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          {t("extensionGroupsTitle")}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
