import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ScrollView, Text } from "../../components/Themed";
import VideoCard from "../../components/VideoCard";
import useOrientation from "../../hooks/useOrientation";
import WatchScreenLayout from "../../loaders/WatchScreenLayout";
import {
  RootStackParamList,
  VideoCardProperties,
  VideoCardProps,
} from "../../types";
import { moderateScale } from "../../utils/scale";
import Column from "./Column";
import Label from "./Label";
import useAnimeVideo from "./useAnimeVideo";
import Video from "./Video";

const { width: windowWidth } = Dimensions.get("window");

type WatchScreenRouteProp = RouteProp<RootStackParamList, "WatchScreen">;
type WatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WatchScreen"
>;

type WatchScreenProps = {
  route: WatchScreenRouteProp;
  navigation: WatchScreenNavigationProp;
};

const LikeIcon = () => (
  <Ionicons name="heart-outline" size={24} color="white" />
);
const DislikeIcon = () => (
  <Ionicons name="ios-heart-dislike-outline" size={24} color="white" />
);

const keyExtractor = (item: VideoCardProps) => item.slug;

export default function WatchScreen({ route, navigation }: WatchScreenProps) {
  const orientation = useOrientation();

  const { slug } = route.params;

  const { data, isLoading, isError } = useAnimeVideo({ slug });

  const handleItemPress = (item: VideoCardProperties) =>
    navigation.replace("WatchScreen", { slug: item.slug });

  const handleRenderItem = ({ item }: { item: VideoCardProperties }) => (
    <VideoCard {...item} onPress={handleItemPress} />
  );

  if (isLoading) {
    return <WatchScreenLayout />;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.playerContainer}>
        <Video
          source={data.source}
          topTitleText={data.title}
          isTopTitleDisabled={orientation !== "LANDSCAPE"}
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
                  value={data.playlists.map(
                    ({ name }: { name: string }) => name
                  )}
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
    flex: 1,
  },
  infoContainer: {
    flex: 2,
  },
  infoColumn: {
    flex: 1,
    maxWidth: windowWidth * 0.9,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewsText: {
    fontSize: moderateScale(16),
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
    fontSize: moderateScale(16),
    fontWeight: "400",
    color: "gray",
    marginHorizontal: 5,
  },

  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dislikesContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  othersContainer: {
    marginVertical: 10,
  },
});
