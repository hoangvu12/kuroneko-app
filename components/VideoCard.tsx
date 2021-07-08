import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import { Text, View } from "./Themed";

import { VideoCardProps } from "../types";

const { width } = Dimensions.get("window");

export const CardPadding = 10;
export const CardWidth = width * 0.5 - CardPadding;

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
  container: {
    width: CardWidth,
    marginRight: CardPadding,
    marginBottom: 15,
  },
  thumbnail: {
    marginBottom: 5,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  studios: {
    fontSize: 14,
    color: "gray",
  },
});
