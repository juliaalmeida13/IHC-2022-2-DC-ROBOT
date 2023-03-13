import React, { useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  useEffect(() => {
    async function lockScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    lockScreenOrientation();
  }, []);

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}