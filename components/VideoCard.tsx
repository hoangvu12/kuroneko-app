import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import { VideoCardProps } from "../types";
import { moderateScale } from "../utils/scale";
import { LightText, MediumText, View } from "./Themed";

const { width } = Dimensions.get("window");

const ContainerPaddingBottom = 15;
const ThumbnailPaddingBottom = 5;

export const CardPaddingRight: number = 10;
export const CardPaddingBottom: number =
  ContainerPaddingBottom + ThumbnailPaddingBottom;

export const ImageWidth: number = 300;
export const ImageHeight: number = 425;

export const CardWidth: number = width * 0.5 - CardPaddingRight;

export const ImageRatio: number = CardWidth / ImageWidth;

export const TitleFontSize = moderateScale(14);
export const StudiosFontSize = moderateScale(12);

export const CardHeight =
  ImageHeight * ImageRatio +
  CardPaddingBottom +
  TitleFontSize +
  StudiosFontSize;

const DEFAULT_onPress = () => {};

const VideoCard = (props: VideoCardProps) => {
  const { image, title, studios, slug, onPress = DEFAULT_onPress } = props;

  const handlePress = () => {
    onPress({ image, title, studios, slug });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
    </TouchableOpacity>
  );
};

export default React.memo(VideoCard);

const styles = StyleSheet.create({
  container: {
    width: CardWidth,
    marginRight: CardPaddingRight,
    marginBottom: ContainerPaddingBottom,
    backgroundColor: "transparent",
  },
  thumbnail: {
    marginBottom: ThumbnailPaddingBottom,
    resizeMode: "cover",
  },
  title: {
    fontSize: TitleFontSize,
    fontWeight: "bold",
  },
  studios: {
    fontSize: StudiosFontSize,
    color: "gray",
  },
});
