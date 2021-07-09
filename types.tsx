/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { TextStyle } from "react-native";

export type VideoPlayerProps = {
  source: string;
  topTitleText?: string;
  topTitleStyle?: TextStyle;
  topDescriptionText?: string;
  topDescriptionStyle?: TextStyle;
};

export type CategoryProps = {
  title: string;
  updatedAt: string;
  videos: VideoCardProps[];
};

export type VideoCardProps = {
  image: string;
  slug: string;
  title: string;
  studios: string[];
  containerStyle: StyleSheet;
};

export type RootStackParamList = {
  Root: undefined;
  WatchScreen: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CategoryParamList = {
  CategoryScreen: undefined;
};
