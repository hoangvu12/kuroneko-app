import React from "react";

import { Dimensions, View } from "react-native";
import { moderateScale } from "../utils/scale";
import { random } from "../utils";
import Loader from "./Loader";
const { width: windowWidth } = Dimensions.get("window");

const LabelLayout = () => (
  <Loader>
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <View
        style={{
          width: windowWidth * random(0.1, 0.3),
          height: moderateScale(18),
          marginBottom: 5,
        }}
      />
      <View
        style={{
          width: windowWidth * random(0.3, 0.8),
          height: moderateScale(16) * random(1, 3),
        }}
      />
    </View>
  </Loader>
);

export default LabelLayout;
