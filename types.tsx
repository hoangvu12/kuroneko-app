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
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
