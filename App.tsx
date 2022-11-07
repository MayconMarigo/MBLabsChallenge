import { StatusBar } from "expo-status-bar";
import React from "react";
import ContextsContainer from "./src/contexts";
import TabNavigators from "./src/navigators/TabNavigators/TabNavigators";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeUseContext } from "./src/theme/Theme";

export default function App() {
  const theme = ThemeUseContext();
  NavigationBar.setBackgroundColorAsync(theme.TABS);

  return (
    <ContextsContainer>
      <StatusBar animated backgroundColor="#41337A" />
      <TabNavigators />
    </ContextsContainer>
  );
}
