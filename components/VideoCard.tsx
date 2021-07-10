import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Image from "react-native-scalable-image";
import { VideoCardProps } from "../types";
import { moderateScale } from "../utils/scale";
import { View, Text, MediumText, LightText } from "./Themed";

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
      <MediumText numberOfLines={1} style={styles.title}>
        {title}
      </MediumText>
      <LightText numberOfLines={1} style={styles.studios}>
        {studios.join(", ")}
      </LightText>
    </View>
  );
};

export default React.memo(VideoCard);

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
