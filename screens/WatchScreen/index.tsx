import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../components/Themed";
import Video from "./Video";

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <Video
          source={SAMPLE_VIDEO}
          topTitleText="This is something that really really long..."
        />
      </View>
      <View style={styles.infoContainer}>
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
    flex: 1,
  },
});
