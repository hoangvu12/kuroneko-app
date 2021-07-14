import React from "react";
import { Dimensions, View } from "react-native";
import { moderateScale } from "../utils/scale";
import LabelLoader from "./LabelLayout";
import Loader from "./Loader";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const numbersOfLabel = new Array(5).fill(null);

const WatchScreenLayout = () => (
  <Loader>
    <View style={styles.videoPlayerContainer} />
    <View style={styles.infoContainer}>
      <View style={styles.title} />
      <View style={styles.statisticsContainer}>
        <View style={styles.views} />
        <View style={styles.love} />
      </View>
      <View style={styles.labelContainer}>
        {numbersOfLabel.map((_, i) => (
          <LabelLoader key={i} />
        ))}
      </View>
    </View>
  </Loader>
);

export default WatchScreenLayout;

const styles = {
  videoPlayerContainer: {
    width: windowWidth,
    height: windowHeight / 3.5,
  },
  infoContainer: {
    width: windowWidth * 0.9,
    padding: 10,
  },
  statisticsContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  labelContainer: {
    marginVertical: 5,
  },
  title: {
    width: "90%",
    height: moderateScale(18),
    marginBottom: 15,
  },
  views: {
    width: windowWidth * 0.45,
    height: moderateScale(16),
  },
  love: {
    width: windowWidth * 0.3,
    height: moderateScale(16),
  },
};
