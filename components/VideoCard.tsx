import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import { Text, View } from "./Themed";

import { VideoCardProps } from "../types";

const { width } = Dimensions.get("window");

export const CardWidth = width * 0.6;

const VideoCard = (props: VideoCardProps) => {
  const { image, title, studios } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        width={CardWidth}
        style={styles.thumbnail}
      />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.studios}>
        {studios.join(", ")}
      </Text>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: { width: CardWidth, marginRight: 13 },
  thumbnail: {
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  studios: {
    fontSize: 16,
    color: "gray",
  },
});
