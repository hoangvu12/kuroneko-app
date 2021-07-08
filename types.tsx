/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

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
