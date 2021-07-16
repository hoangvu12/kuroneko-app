import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import { AVPlaybackStatus, Video as ExpoVideo } from "expo-av";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LightText, Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useOrientation from "../../hooks/useOrientation";
import { VideoPlayerButtonPress, VideoPlayerProps } from "../../types";
import { parseTime } from "../../utils";
import { moderateScale } from "../../utils/scale";
import VideoButton from "./VideoButton";

const BackIcon = () => (
  <Ionicons name="ios-chevron-back-outline" size={30} color="white" />
);
const DownIcon = () => (
  <Entypo name="chevron-small-down" size={32} color="white" />
);
const PlayIcon = () => <Ionicons name="play" size={50} color="white" />;
const PauseIcon = () => <Ionicons name="pause" size={50} color="white" />;
const PlayBackIcon = () => (
  <Ionicons name="play-back-outline" size={30} color="white" />
);
const PlayForwardIcon = () => (
  <Ionicons name="play-forward-outline" size={30} color="white" />
);

const FullscreenIcon = () => (
  <MaterialCommunityIcons name="fullscreen" size={24} color="white" />
);
const FullscreenExitIcon = () => (
  <MaterialCommunityIcons name="fullscreen-exit" size={24} color="white" />
);

const DEFAULT_onPlayBackPress = (
  status: AVPlaybackStatus,
  video: ExpoVideo
): void => {
  video.setPositionAsync(status.positionMillis - 10000);
};

const DEFAULT_onPlayPress = (
  status: AVPlaybackStatus,
  video: ExpoVideo
): void => {
  status.isPlaying ? video.pauseAsync() : video.playAsync();
};

const DEFAULT_onPlayForwardPress = (
  status: AVPlaybackStatus,
  video: ExpoVideo
): void => {
  video.setPositionAsync(status.positionMillis + 10000);
};

const DEFAULT_videoStatus: AVPlaybackStatus = {
  isLoaded: false,
  durationMillis: 0,
  positionMillis: 0,
  isPlaying: false,
  isBuffering: false,
};

function Video(props: VideoPlayerProps) {
  const {
    source,
    topTitleText,
    topTitleStyle,
    topDescriptionText,
    topDescriptionStyle,
    isTopTitleDisabled = false,
    onPlayBackPress = DEFAULT_onPlayBackPress,
    onPlayPress = DEFAULT_onPlayPress,
    onPlayForwardPress = DEFAULT_onPlayForwardPress,
  } = props;

  const orientation = useOrientation();
  const navigation = useNavigation();

  const videoRef = useRef<ExpoVideo>(null);
  const [videoStatus, setVideoStatus] =
    useState<AVPlaybackStatus>(DEFAULT_videoStatus);
  const [showControls, setShowControls] = useState<Boolean>(true);

  useEffect(() => {
    if (orientation === "LANDSCAPE") return activateKeepAwake();

    deactivateKeepAwake();

    return () => deactivateKeepAwake();
  }, [orientation]);

  const handleSlideDrag = async (value: number): Promise<void> => {
    await videoRef.current?.setPositionAsync(value);
    videoRef.current?.playAsync();
  };

  const handleOverlayPress = () => {
    setShowControls(!showControls);
  };

  const handleVideoButtonPress = (fn: VideoPlayerButtonPress) => {
    return () => fn(videoStatus, videoRef.current!);
  };

  const handleFullscreenPress = () => {
    ScreenOrientation.lockAsync(
      orientation === "LANDSCAPE"
        ? ScreenOrientation.OrientationLock.PORTRAIT
        : ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleOverlayPress}>
      <SafeAreaView style={styles.container}>
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
          resizeMode={
            orientation === "LANDSCAPE"
              ? ExpoVideo.RESIZE_MODE_CONTAIN
              : ExpoVideo.RESIZE_MODE_COVER
          }
          onPlaybackStatusUpdate={(status) => setVideoStatus(status)}
        />

        {/* If show controls is false, show an invisible overlay */}
        {/* to prevent user pressing buttons */}
        {!showControls && (
          <View style={[StyleSheet.absoluteFill, { zIndex: 10 }]}></View>
        )}

        <View
          style={[
            styles.overlayContainer,
            StyleSheet.absoluteFill,
            { opacity: showControls ? 1 : 0 },
          ]}
        >
          {/* Top */}
          <View style={styles.topContainer}>
            <View style={styles.leftTopContainer}>
              {/* Back button */}
              <VideoButton
                icon={orientation === "LANDSCAPE" ? <DownIcon /> : <BackIcon />}
                onPress={() => {
                  orientation === "LANDSCAPE"
                    ? ScreenOrientation.lockAsync(
                        ScreenOrientation.OrientationLock.PORTRAIT
                      )
                    : navigation.goBack();
                }}
              />
              {!isTopTitleDisabled && (
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
              )}
            </View>
          </View>

          {/* Middle */}
          <View style={styles.middleContainer}>
            <View style={styles.middleRightContainer}>
              {/* Play back button */}
              <VideoButton
                icon={<PlayBackIcon />}
                onPress={handleVideoButtonPress(onPlayBackPress)}
              />

              {/* Play button */}
              <VideoButton
                icon={
                  videoStatus.isBuffering && !videoStatus.isPlaying ? (
                    <ActivityIndicator
                      size={60}
                      color="rgba(250,250,250,0.8)"
                    />
                  ) : videoStatus.isPlaying ? (
                    <PauseIcon />
                  ) : (
                    <PlayIcon />
                  )
                }
                onPress={handleVideoButtonPress(onPlayPress)}
              />

              {/* Play forward button */}
              <VideoButton
                icon={<PlayForwardIcon />}
                onPress={handleVideoButtonPress(onPlayForwardPress)}
              />
            </View>
          </View>

          {/* Bottom */}
          <View style={styles.bottomContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeStyle}>
                {parseTime(videoStatus.positionMillis)} /{" "}
                {parseTime(videoStatus.durationMillis)}
              </Text>

              {/* Fullscreen button */}
              <VideoButton
                icon={
                  orientation === "LANDSCAPE" ? (
                    <FullscreenExitIcon />
                  ) : (
                    <FullscreenIcon />
                  )
                }
                onPress={handleFullscreenPress}
              />
            </View>
            <View style={styles.sliderContainer}>
              {/* Slider */}
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={videoStatus.durationMillis}
                value={videoStatus.positionMillis}
                minimumTrackTintColor={Colors.dark.item}
                maximumTrackTintColor="#fff"
                thumbTintColor={Colors.dark.item}
                onSlidingComplete={handleSlideDrag}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: moderateScale(16),
    marginRight: 5,
  },
  leftTopDescription: {
    fontSize: moderateScale(14),
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
  timeContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  timeStyle: {
    color: "white",
  },
  sliderContainer: {
    width: "100%",
  },
  slider: {
    width: "100%",
    height: 20,
  },
});
