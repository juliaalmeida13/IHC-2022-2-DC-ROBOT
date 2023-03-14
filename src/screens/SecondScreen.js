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
    fetch(`http://192.168.137.14:5000/ros/goTo/${localizacao}`).catch((error)=> console.log(error));
  };

  return (
    <Layout>
      <TopNav
        middleContent="Mapa do DC"
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
                  Suporte
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
                                           Auditorio
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
                                                      right: 630
                                                    }}
                                                    onPress={() => chamadaAPI("Banheiros")}
                                                  >
                                                    <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                                    Banheiros
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
                                     right: 540
                                   }}
                                   onPress={() => chamadaAPI("Copa")}
                                 >
                                   <Text style={{ color: isDarkmode ? '#D9D9D9' : '#464444', fontWeight: "bold" }}>
                                   Copa
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
                                    right: 470
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
                                          Reunioes
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
                                         Chefia
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
                                         Recepcao
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
                                        Graduacao
                                        </Text>
                                      </TouchableOpacity>



      </View>
    </Layout>
  );
}