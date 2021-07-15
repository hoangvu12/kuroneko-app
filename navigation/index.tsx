/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Image, ColorSchemeName, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
// import Image from "react-native-scalable-image";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import WatchScreen from "../screens/WatchScreen";
import SearchScreen from "../screens/SearchScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const LogoTitle: React.FC<{}> = () => {
  return (
    <Image
      style={{ width: 40, height: 30 }}
      // eslint-disable-next-line no-undef
      source={require("../images/icon.png")}
    />
  );
};

function RootNavigator() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.headerBackground,
        },
        headerTintColor: colors.tint,
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <EvilIcons name="search" size={30} color={colors.tint} />
          </TouchableOpacity>
        ),
        headerTitle: (props) => <LogoTitle {...props} />,
        cardStyle: { backgroundColor: colors.background },
      })}
    >
      <Stack.Screen
        name="WatchScreen"
        component={WatchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Lỗi!" }}
      />
    </Stack.Navigator>
  );
}
