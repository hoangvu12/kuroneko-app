import React from "react";
import { ViewStyle } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { ICustomViewStyle } from "react-native-skeleton-content/lib/Constants";

type LoaderProps = {
  layout: any[];
  containerStyle?: ViewStyle;
  isLoading: boolean;
};

export default function Loader(props: LoaderProps) {
  const { layout, containerStyle, isLoading = true } = props;

  return (
    <SkeletonContent
      boneColor="#121212"
      highlightColor="#333333"
      animationType="pulse"
      layout={layout}
      isLoading={isLoading}
      containerStyle={[containerStyle]}
    />
  );
}

export function mergeLayouts(...layouts: any[]): ICustomViewStyle[] {
  return layouts.flat();
}

export function randomKey(key: string): string {
  const randomStr = Math.random().toString(36).substr(2, 5);

  return `${key}-${randomStr}`;
}
