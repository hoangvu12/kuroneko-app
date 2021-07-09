import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Image from "react-native-scalable-image";
import { VideoCardProps } from "../types";
import { moderateScale } from "../utils/scale";
import { LightText, ThinText, View } from "./Themed";

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
      <LightText numberOfLines={1} style={styles.title}>
        {title}
      </LightText>
      <ThinText numberOfLines={1} style={styles.studios}>
        {studios.join(", ")}
      </ThinText>
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
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  studios: {
    fontSize: moderateScale(14),
    color: "gray",
  },
});
