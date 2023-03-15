import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
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
    fetch(`http://192.168.1.100:5000/ros/goTo/${localizacao}`).catch((error)=> console.log(error));
  };

  return (
    <Layout>
      <TopNav
        middleContent={t("mapTitle")}
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={<View style={{ flexDirection: 'row' }}>
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

      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <Text 
          style={{
            fontFamily: "Lato",
            fontSize: 30,
            fontWeight: "bold",
            position: "absolute",
            textAlign: "center",
            bottom: 790,
            marginTop: 20,
            marginBottom: 10,
            color: isDarkmode ? '#D9D9D9' : '#464444'
          }}
        > 
          Escolha o lugar em que gostaria de ir
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
            position: 'absolute',
            bottom: 100,
            right: 770
          }}
          onPress={() => chamadaAPI("LE-1")}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
            LE-1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
             position: 'absolute',
                        bottom: 160,
                        right: 770
          }}
          onPress={() => chamadaAPI("LE-2")}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          LE-2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
            position: 'absolute',
            bottom: 220,
            right: 770
          }}
          onPress={() => chamadaAPI("LE-3")}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          LE-3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            position: 'absolute',
            bottom: 290,
            right: 770
          }}
          onPress={() => chamadaAPI("LE-4")}
        >
          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
          LE-4
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
                  style={{
                    backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                    borderRadius: 20,
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    position: 'absolute',
                    bottom: 290,
                    right: 770
                  }}
                  onPress={() => chamadaAPI("Suporte")}
                >
                  <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                  {t("Support")}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                          style={{
                            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                            borderRadius: 20,
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            position: 'absolute',
                            bottom: 350,
                            right: 770
                          }}
                          onPress={() => chamadaAPI("PPG-CC4")}
                        >
                          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                          PPG-CC4
                          </Text>
                        </TouchableOpacity>

                <TouchableOpacity
                          style={{
                            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                            borderRadius: 20,
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            position: 'absolute',
                            bottom: 410,
                            right: 770
                          }}
                          onPress={() => chamadaAPI("Maker")}
                        >
                          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                          Maker
                          </Text>
                        </TouchableOpacity>

        <TouchableOpacity
                                  style={{
                                    backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                    borderRadius: 20,
                                    paddingVertical: 15,
                                    paddingHorizontal: 20,
                                    position: 'absolute',
                                    bottom: 470,
                                    right: 770
                                  }}
                                  onPress={() => chamadaAPI("LE-5")}
                                >
                                  <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                  LE-6
                                  </Text>
                                </TouchableOpacity>

         <TouchableOpacity
                                           style={{
                                             backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                             borderRadius: 20,
                                             paddingVertical: 15,
                                             paddingHorizontal: 20,
                                             position: 'absolute',
                                             bottom: 530,
                                             right: 770
                                           }}
                                           onPress={() => chamadaAPI("Auditorio")}
                                         >
                                           <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                           {t("Auditorium")}
                                           </Text>
                                         </TouchableOpacity>

         <TouchableOpacity
                                                    style={{
                                                      backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                                      borderRadius: 20,
                                                      paddingVertical: 15,
                                                      paddingHorizontal: 20,
                                                      position: 'absolute',
                                                      bottom: 110,
                                                      right: 620
                                                    }}
                                                    onPress={() => chamadaAPI("Banheiros")}
                                                  >
                                                    <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                                    {t("Bathrooms")}
                                                    </Text>
                                                  </TouchableOpacity>

         <TouchableOpacity
                                   style={{
                                     backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                     borderRadius: 20,
                                     paddingVertical: 15,
                                     paddingHorizontal: 20,
                                     position: 'absolute',
                                     bottom: 110,
                                     right: 520
                                   }}
                                   onPress={() => chamadaAPI("Copa")}
                                 >
                                   <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                   {t("Kitchen")}
                                   </Text>
                                 </TouchableOpacity>

        <TouchableOpacity
                                  style={{
                                    backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                    borderRadius: 20,
                                    paddingVertical: 15,
                                    paddingHorizontal: 20,
                                    position: 'absolute',
                                    bottom: 110,
                                    right: 450,
                                  }}
                                  onPress={() => chamadaAPI("Lig")}
                                >
                                  <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                  Lig
                                  </Text>
                                </TouchableOpacity>

        <TouchableOpacity
                                          style={{
                                            backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                            borderRadius: 20,
                                            paddingVertical: 15,
                                            paddingHorizontal: 20,
                                            position: 'absolute',
                                            bottom: 250,
                                            right: 470
                                          }}
                                          onPress={() => chamadaAPI("Reunioes")}
                                        >
                                          <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                          {t("Reunions")}
                                          </Text>
                                        </TouchableOpacity>

       <TouchableOpacity
                                         style={{
                                           backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                           borderRadius: 20,
                                           paddingVertical: 15,
                                           paddingHorizontal: 20,
                                           position: 'absolute',
                                           bottom: 350,
                                           right: 470
                                         }}
                                         onPress={() => chamadaAPI("Chefia")}
                                       >
                                         <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                         {t("Management")}
                                         </Text>
                                       </TouchableOpacity>

       <TouchableOpacity
                                         style={{
                                           backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                           borderRadius: 20,
                                           paddingVertical: 15,
                                           paddingHorizontal: 20,
                                           position: 'absolute',
                                           bottom: 350,
                                           right: 330
                                         }}
                                         onPress={() => chamadaAPI("Recepcao")}
                                       >
                                         <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                         {t("Reception")}
                                         </Text>
                                       </TouchableOpacity>

      <TouchableOpacity
                                        style={{
                                          backgroundColor: isDarkmode ? '#9C86B8' : '#A0BDC6',
                                          borderRadius: 20,
                                          paddingVertical: 15,
                                          paddingHorizontal: 20,
                                          position: 'absolute',
                                          bottom: 250,
                                          right: 330
                                        }}
                                        onPress={() => chamadaAPI("Graduacao")}
                                      >
                                        <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                        {t("Graduation")}
                                        </Text>
                                      </TouchableOpacity>



      </View>
    </Layout>
  );
}