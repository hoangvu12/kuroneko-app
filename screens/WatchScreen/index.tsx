import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { ScrollView, Text } from "../../components/Themed";
import Video from "./Video";
import useOrientation from "../../hooks/useOrientation";
import Column from "./Column";

import { data } from "../../data/video.json";
import { moderateScale } from "../../utils/scale";
import Label from "./Label";
import { VideoCardProps } from "../../types";
import VideoCard from "../../components/VideoCard";

const { width: windowWidth } = Dimensions.get("window");

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const LikeIcon = () => (
  <Ionicons name="heart-outline" size={24} color="white" />
);
const DislikeIcon = () => (
  <Ionicons name="ios-heart-dislike-outline" size={24} color="white" />
);

const handleRenderItem = ({ item }: { item: VideoCardProps }) => (
  <VideoCard {...item} />
);

const keyExtractor = (item: VideoCardProps) => item.slug;

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
        <ScrollView horizontal style={{ flex: 1 }}>
          <Column as={ScrollView} style={styles.infoColumn}>
            <Text numberOfLines={2} style={styles.title}>
              {data.title}
            </Text>
            <View style={styles.statisticsContainer}>
              <Text style={styles.viewsText}>{data.views}</Text>
              <View style={styles.lovesContainer}>
                <View style={styles.likesContainer}>
                  <LikeIcon />
                  <Text style={styles.loveText}>{data.likes}</Text>
                </View>
                <View style={styles.dislikesContainer}>
                  <DislikeIcon />
                  <Text style={styles.loveText}>{data.dislikes}</Text>
                </View>
              </View>
            </View>
            <View style={styles.othersContainer}>
              <Label.Container inline>
                <Label label="Hãng" value={data.studios} />
                <Label
                  value={data.censorship}
                  valueStyle={{ color: "#F87171", fontWeight: "bold" }}
                />
              </Label.Container>

              <Label.Container>
                <Label label="Tên khác" value={data.altTitle} />
                <Label
                  label="Trọn bộ"
                  value={data.playlists.map(({ name }) => name)}
                />
                <Label label="Ngày phát hành" value={data.releasedDate} />
                <Label
                  label="Nội dung"
                  value={data.description}
                  valueStyle={{ textAlign: "justify" }}
                />
              </Label.Container>
            </View>
          </Column>

          <Column>
            <Text style={[styles.title, { paddingVertical: 5 }]}>
              Video liên quan
            </Text>

            <FlatList
              data={data.related}
              renderItem={handleRenderItem}
              numColumns={2}
              keyExtractor={keyExtractor}
              key="related-videos"
            />
          </Column>
        </ScrollView>
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
  infoColumn: {
    flex: 1,
    maxWidth: windowWidth * 0.9,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewsText: {
    fontSize: moderateScale(18),
    fontWeight: "400",
    color: "gray",
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lovesContainer: {
    flexDirection: "row",
  },
  loveText: {
    fontSize: moderateScale(18),
    fontWeight: "400",
    color: "gray",
    marginHorizontal: 5,
  },

  likesContainer: {
    flexDirection: "row",
  },
  dislikesContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  othersContainer: {
    marginVertical: 10,
  },
});
