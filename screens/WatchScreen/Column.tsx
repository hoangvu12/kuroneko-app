import React from "react";
import { Dimensions, StyleSheet, ViewStyle } from "react-native";
import { View } from "../../components/Themed";

const { width: windowWidth } = Dimensions.get("window");

type ColumnProps = {
  as?: React.ElementType<any>;
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function Column(props: ColumnProps) {
  const { as: Component = View, children, style } = props;

  return <Component style={[styles.container, style]}>{children}</Component>;
}

export const ColumnWidth = windowWidth * 0.9;

const styles = StyleSheet.create({
  container: {
    minWidth: ColumnWidth,
    padding: 12,
  },
});
