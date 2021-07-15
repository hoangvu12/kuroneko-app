import React from "react";
import { View, ViewStyle } from "react-native";
import Loader from "./Loader";
import VideoCardLayout from "./VideoCardLayout";

const arr = new Array(2).fill(null);

export default function ColumnVideoCardLayout() {
  return (
    <Loader>
      {arr.map((_, i) => (
        <View style={styles.videosContainer} key={i}>
          {arr.map((_, i) => (
            <VideoCardLayout key={i} style={styles.video} />
          ))}
        </View>
      ))}
    </Loader>
  );
}

interface ColumnVideoCardLayoutStyle {
  [key: string]: ViewStyle;
}

const styles: ColumnVideoCardLayoutStyle = {
  videosContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    overflow: "hidden",
  },
  video: {
    overflow: "hidden",
  },
};
