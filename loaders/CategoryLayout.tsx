import React from "react";
import { Dimensions, View } from "react-native";
import { moderateScale } from "../utils/scale";
import Loader from "./Loader";
import VideoCardLayout from "./VideoCardLayout";

const { width: windowWidth } = Dimensions.get("window");

const numbersOfVideo = new Array(2).fill(null);

const CategoryLayout = () => (
  <Loader>
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <View style={styles.title} />
        <View style={styles.time} />
      </View>
      <View style={styles.videoContainer}>
        {numbersOfVideo.map((_, i) => (
          <VideoCardLayout key={i} />
        ))}
      </View>
    </View>
  </Loader>
);

export default CategoryLayout;

const styles = {
  container: {
    marginVertical: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  videoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    height: moderateScale(20),
    width: windowWidth * 0.7,
    marginBottom: 5,
  },
  time: {
    height: moderateScale(16),
    width: windowWidth * 0.4,
  },
};
