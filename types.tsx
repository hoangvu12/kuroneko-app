/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { AVPlaybackStatus, Video } from "expo-av";
import { TextStyle } from "react-native";
import { IOnSizeParams } from "react-native-scalable-image";

export type VideoButtonProps = {
  icon: JSX.Element;
  onPress: () => void;
  disabled?: boolean;
};

export type VideoPlayerButtonPress = (
  status: AVPlaybackStatus,
  video: Video
) => void;

export type VideoPlayerProps = {
  source: string;
  topTitleText?: string;
  topTitleStyle?: TextStyle;
  topDescriptionText?: string;
  topDescriptionStyle?: TextStyle;
  isTopTitleDisabled?: boolean;
  onSkipBackPress?: VideoPlayerButtonPress;
  onPlayBackPress?: VideoPlayerButtonPress;
  onPlayPress?: VideoPlayerButtonPress;
  onPlayForwardPress?: VideoPlayerButtonPress;
  onSkipForwardPress?: VideoPlayerButtonPress;
};

export type CategoryProps = {
  title: string;
  updatedAt: string;
  videos: VideoCardProps[];
};

export type VideoCardProps = {
  containerStyle?: StyleSheet;
  onPress?: (params: VideoCardProperties) => void;
} & VideoCardProperties;

export type VideoCardProperties = {
  image: string;
  slug: string;
  title: string;
  studios: string[];
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
