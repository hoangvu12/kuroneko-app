/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { AVPlaybackStatus, Video } from "expo-av";
import { TextStyle } from "react-native";

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

// "name": "3D",
//     "description": "Hoạt hình 3D chân thật hơn, giống thật mà không phải là thật!",
//     "total": 74,
//     "videos": [
//       {
//         "image": "https://1.bp.blogspot.com/---nTM81Ylys/XEPnc_3J48I/AAAAAAAACkc/LzLzjfh8XoEaa7pOZg89scZrbVXox7nKgCLcBGAs/w200/Chikan-Shita-Joshi.jpg",
//         "slug": "chikan-shita-joshi-2",
//         "title": "Chikan Shita Joshi 2",
//         "studios": ["SELFISH"]
//       },
//       {
//         "image": "https://1.bp.blogspot.com/---nTM81Ylys/XEPnc_3J48I/AAAAAAAACkc/LzLzjfh8XoEaa7pOZg89scZrbVXox7nKgCLcBGAs/w200/Chikan-Shita-Joshi.jpg",
//         "slug": "chikan-shita-joshi-1",
//         "title": "Chikan Shita Joshi 1",
//         "studios": ["SELFISH"]
//       }
//     ]
export interface Category {
  name: string;
  description: string;
  total: number;
  videos: VideoCardProperties[];
  pages: number;
  nextPage: number;
  page: number;
}

export interface Section {
  title: string;
  updatedAt: string;
  videos: VideoCardProperties[];
}

export interface SectionProps extends Section {
  videos: VideoCardProps[];
}

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
  WatchScreen: { slug: VideoCardProperties["slug"] };
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
