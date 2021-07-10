import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";

type LabelContainerProps = {
  inline?: boolean;
  children: React.ReactNode;
};

export default function LabelContainer(props: LabelContainerProps) {
  const { inline = false, children } = props;

  return (
    <View style={inline ? styles.inlineContainer : styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inlineContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    flexWrap: "nowrap",
  },
  container: {
    marginVertical: 10,
  },
});
