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
        middleContent="Lista de Professores"
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
          Prof. Dr. Vânia Paula de Almeida Neris
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium egestas dui sit amet hendrerit. Mauris odio lorem, fermentum eget elementum non, gravida vel lectus. Curabitur id erat elit. Sed quis accumsan urna, sit amet consequat nunc. Sed pharetra aliquam ullamcorper. Morbi vestibulum tortor leo, in fringilla massa hendrerit eu. Nam quis lectus a est ullamcorper cursus. Nulla aliquet ut tellus ut blandit. Vestibulum eu mauris aliquet, fermentum augue ac, semper sem. Maecenas ac ultrices purus. Pellentesque tincidunt iaculis aliquet. Maecenas id odio non erat lobortis commodo. Nam porta purus quis tortor ultrices, et fringilla sem pellentesque. Mauris mollis eleifend nisi, nec pretium urna tristique at.

Integer semper metus id sollicitudin venenatis. Sed commodo, nisl a tempor pulvinar, quam dui tristique diam, in ultrices orci sapien vel urna. Pellentesque pharetra ac leo sit amet dictum. Sed non ornare turpis. Morbi sed odio ut lectus fermentum varius. Pellentesque a finibus libero, ut elementum sem. Cras sagittis non mauris ac dapibus. Morbi rutrum massa libero, nec dapibus justo commodo eget. Donec vulputate pellentesque purus. Praesent vitae diam in massa facilisis ornare. Vivamus porta elit eget dapibus suscipit. Aliquam gravida nibh sit amet nunc interdum maximus. Proin blandit luctus mattis. Pellentesque lobortis mauris tempus, sagittis urna sed, auctor ipsum. Mauris vel nisl velit. Sed eleifend lacus eu arcu consectetur, et rhoncus erat aliquet.

Mauris ut convallis erat. Donec sollicitudin massa sed vehicula tempus. Praesent lacinia purus id sodales dictum. Vestibulum faucibus quis velit ut commodo. Pellentesque eu sem et dui ultricies varius vel eget purus. Cras leo dui, tristique non egestas eget, aliquam in neque. Nunc fringilla facilisis ligula id cursus. Integer in mauris ac urna sodales lobortis vitae ut nibh. Ut suscipit, sem eget viverra placerat, mauris mauris bibendum risus, vel laoreet metus neque et nunc. Vivamus hendrerit rutrum velit in fringilla. Curabitur ut blandit est, vitae mollis velit.

Nam nunc nibh, fermentum vel neque sit amet, consectetur lacinia risus. Ut eu leo eget erat accumsan vehicula eget vel lacus. Nullam dapibus vestibulum quam sed porta. Nunc at magna elit. Ut finibus massa et pretium cursus. Sed eu metus id eros sagittis ornare porttitor nec nisi. Aliquam suscipit, ipsum eu hendrerit condimentum, diam ex semper augue, et varius tortor urna sed libero. Aliquam sapien nisl, semper ac bibendum vel, sodales vel velit. Sed non felis rutrum, sagittis nisl quis, hendrerit ipsum. Aenean a dolor lacus. Aenean eros sapien, lacinia vel magna ac, pulvinar rhoncus ante. Cras tempus felis facilisis lorem interdum, vel vestibulum risus rutrum. Duis consequat quam at laoreet faucibus. Maecenas pretium elementum dignissim. Aenean convallis iaculis nisi sed eleifend. Ut tristique, quam sit amet pretium ultricies, ante turpis venenatis massa, et molestie enim nulla auctor sem.

In sed mi orci. Aliquam ullamcorper nulla nisi. Cras hendrerit dui eu quam ultricies, at hendrerit risus posuere. Pellentesque aliquet ante quis turpis ullamcorper imperdiet. Phasellus vel diam nec leo rutrum euismod cursus ut tortor. Praesent sit amet lacinia eros. Quisque pretium sem eu viverra consectetur. Vivamus id arcu mollis, tincidunt ipsum vehicula, condimentum augue. Maecenas laoreet, turpis a vulputate accumsan, velit mauris semper nisl, at dapibus dolor nulla sit amet diam. Maecenas libero ipsum, rhoncus sed metus nec, fermentum iaculis odio.


        
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}