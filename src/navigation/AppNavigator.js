import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import Menu from "../screens/Menu";
import Professores from "../screens/Professores";
import Descricao from "../screens/Descricao_professores";

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
      <MainStack.Screen name="Descricao" component={Descricao} />


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
