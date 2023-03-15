import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import Menu from "../screens/Menu";
import Professores from "../screens/Professores";
import Grupos from "../screens/Grupos";
import Descricao from "../screens/Extensão/Descricao_professores";
import cati from "../screens/Extensão/Cati";
import Gamso from "../screens/Extensão/Gamso";
import Mu from "../screens/Extensão/Mu";
import PETBCC from "../screens/Extensão/PETBCC";
import PETENC from "../screens/Extensão/PETENC";
import PyLadies from "../screens/Extensão/PyLadies";
import SECOMP from "../screens/Extensão/SECOMP";

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="Menu" component={Menu} />
      <MainStack.Screen name="Professores" component={Professores} />
      <MainStack.Screen name="Grupos" component={Grupos} />

      <MainStack.Screen name="Cati" component={cati} />
      <MainStack.Screen name="Gamso" component={Gamso} />
      <MainStack.Screen name="Mu" component={Mu} />
      <MainStack.Screen name="PETBCC" component={PETBCC} />
      <MainStack.Screen name="PETENC" component={PETENC} />
      <MainStack.Screen name="PyLadies" component={PyLadies} />
      <MainStack.Screen name="SECOMP" component={SECOMP} />


    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
