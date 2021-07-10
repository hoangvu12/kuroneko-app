import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { View, Text } from "../../components/Themed";
import { moderateScale } from "../../utils/scale";
import LabelContainer from "./LabelContainer";

type LabelProps = {
  label?: string;
  value: string | string[];
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
};

export default function Label(props: LabelProps) {
  const { value, label, labelStyle, valueStyle } = props;

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.labelText, labelStyle]}>{label}</Text>}
      <Text style={[styles.valueText, valueStyle]}>
        {Array.isArray(value) ? value.join(", ") : value}
      </Text>
    </View>
  );
}

Label.Container = LabelContainer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  labelText: {
    fontSize: moderateScale(17),
    fontWeight: "bold",
    marginBottom: 5,
  },
  valueText: {
    fontSize: moderateScale(17),
    fontWeight: "400",
    color: "gray",
  },
});
