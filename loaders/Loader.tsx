import React from "react";
import { ViewStyle } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

interface LoaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Loader(props: LoaderProps) {
  return (
    <SkeletonContent
      isLoading={true}
      highlightColor="#333333"
      boneColor="#121212"
      containerStyle={props.style}
    >
      {props.children}
    </SkeletonContent>
  );
}
