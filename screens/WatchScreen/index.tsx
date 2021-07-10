import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "../../components/Themed";
import Video from "./Video";
import useOrientation from "../../hooks/useOrientation";

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchScreen() {
  const orientation = useOrientation();

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.playerContainer}>
        <Video
          source={SAMPLE_VIDEO}
          topTitleText="This is a really really long text, just want to sure if it shows correctly"
          topDescriptionText="ABC"
        />
      </View>
      <View
        style={[
          styles.infoContainer,
          { display: orientation === "LANDSCAPE" ? "none" : "flex" },
        ]}
      >
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playerContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  infoContainer: {
    flex: 2,
  },
});
