import { AVPlaybackStatus, Video as ExpoVideo } from "expo-av";
import React, {
  useRef,
  useState,
  useEffect,
  Ref,
  MutableRefObject,
} from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import { LightText, Text } from "../../components/Themed";
import { VideoPlayerProps } from "../../types";
import { parseTime } from "../../utils";
import Colors from "../../constants/Colors";

const BackIcon = () => (
  <Ionicons name="ios-chevron-back-outline" size={30} color="white" />
);
const DownIcon = () => (
  <Entypo name="chevron-small-down" size={32} color="white" />
);
const DotsIcon = () => (
  <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
);
const SkipBackIcon = () => (
  <Ionicons name="play-skip-back-outline" size={30} color="white" />
);
const SkipForwardIcon = () => (
  <Ionicons name="play-skip-forward-outline" size={30} color="white" />
);
const PlayIcon = () => <Ionicons name="play" size={50} color="white" />;
const PauseIcon = () => <Ionicons name="pause" size={50} color="white" />;
const PlayBackIcon = () => (
  <Ionicons name="play-back-outline" size={30} color="white" />
);
const PlayForwardIcon = () => (
  <Ionicons name="play-forward-outline" size={30} color="white" />
);
const LockIcon = () => (
  <Ionicons name="lock-closed-outline" size={24} color="white" />
);
const UnlockIcon = () => (
  <Ionicons name="lock-open-outline" size={24} color="white" />
);
const FullscreenIcon = () => (
  <MaterialCommunityIcons name="fullscreen" size={24} color="white" />
);
const FullscreenExitIcon = () => (
  <MaterialCommunityIcons name="fullscreen-exit" size={24} color="white" />
);

export default function Video(props: VideoPlayerProps) {
  const {
    source,
    topTitleText,
    topTitleStyle,
    topDescriptionText,
    topDescriptionStyle,
  } = props;

  const videoRef = useRef<ExpoVideo>(null);
  const [videoStatus, setVideoStatus] = useState<AVPlaybackStatus>({});

  const handleSlideDrag = async (value: number): Promise<void> => {
    await videoRef.current.setPositionAsync(value);
    videoRef.current.playAsync();
  };

  return (
    <View style={styles.container}>
      <ExpoVideo
        key={source}
        shouldPlay
        ref={videoRef}
        style={styles.player}
        usePoster
        source={{
          uri: source,
          overrideFileExtensionAndroid: source.includes("m3u8")
            ? "m3u8"
            : "mp4",
        }}
        resizeMode={ExpoVideo.RESIZE_MODE_COVER}
        onPlaybackStatusUpdate={(status) => setVideoStatus(status)}
      />
      <View style={[styles.overlayContainer, StyleSheet.absoluteFill]}>
        {/* Top */}
        <View style={styles.topContainer}>
          <View style={styles.leftTopContainer}>
            <DownIcon />
            <View style={styles.leftTopTextContainer}>
              {topTitleText && (
                <Text
                  numberOfLines={1}
                  style={[styles.leftTopTitle, topTitleStyle]}
                >
                  {topTitleText}
                </Text>
              )}
              {topDescriptionText && (
                <LightText
                  numberOfLines={1}
                  style={[styles.leftTopDescription, topDescriptionStyle]}
                >
                  {topDescriptionText}
                </LightText>
              )}
            </View>
          </View>
          <View style={styles.rightTopContainer}>
            <DotsIcon />
          </View>
        </View>

        {/* Middle */}
        <View style={styles.middleContainer}>
          <View style={styles.middleLeftContainer}>
            <LockIcon />
          </View>
          <View style={styles.middleRightContainer}>
            <SkipBackIcon />
            <PlayBackIcon />
            <PlayIcon />
            <PlayForwardIcon />
            <SkipForwardIcon />
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottomContainer}>
          <View style={styles.statisticsContainer}>
            <Text style={styles.timeStyle}>
              {parseTime(videoStatus.positionMillis)} /{" "}
              {parseTime(videoStatus.durationMillis)}
            </Text>
            <FullscreenExitIcon />
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={videoStatus.durationMillis}
              value={videoStatus.positionMillis}
              minimumTrackTintColor={Colors.dark.item}
              maximumTrackTintColor="#fff"
              thumbTintColor={Colors.dark.item}
              onValueChange={handleSlideDrag}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  player: {
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  topContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  leftTopContainer: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  leftTopTextContainer: {
    flex: 1,
    alignItems: "baseline",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  leftTopTitle: {
    fontSize: 20,
    marginRight: 5,
  },
  leftTopDescription: {
    fontSize: 17,
    color: "gray",
  },
  rightTopContainer: {
    flex: 1,
    alignItems: "center",
  },
  middleContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middleLeftContainer: {
    position: "absolute",
    alignSelf: "center",
    left: 10,
  },
  middleRightContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
    width: "100%",
  },
  statisticsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  timeStyle: {
    color: "white",
  },
  sliderContainer: {
    width: "100%",
  },
  slider: {
    width: "100%",
    height: 40,
  },
});
