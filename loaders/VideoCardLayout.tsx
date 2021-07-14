import React from "react";
import { View, ViewStyle } from "react-native";
import {
  CardPaddingRight,
  CardWidth,
  ImageHeight,
  ImageRatio,
  StudiosFontSize,
  TitleFontSize,
} from "../components/VideoCard";
import Loader from "./Loader";

const VideoCardLayout = () => (
  <Loader>
    <View style={styles.container}>
      <View style={styles.thumbnail} />
      <View style={styles.title} />
      <View style={styles.studios} />
    </View>
  </Loader>
);

export default VideoCardLayout;

const styles = {
  container: {
    width: CardWidth,
    marginRight: CardPaddingRight,
    marginBottom: 5,
  },
  thumbnail: {
    width: CardWidth,
    height: ImageHeight * ImageRatio,
    marginBottom: 5,
  },
  title: {
    height: TitleFontSize,
    width: CardWidth * 0.7,
    marginBottom: 5,
  },
  studios: {
    height: StudiosFontSize,
    width: CardWidth * 0.4,
  },
};
