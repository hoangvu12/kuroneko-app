import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import VideoCard from "../../components/VideoCard";
import { CategoryProps, VideoCardProperties } from "../../types";
import { moderateScale } from "../../utils/scale";

export default function Category(props: CategoryProps) {
  const { title, updatedAt, videos } = props;

  const navigation = useNavigation();

  const handleItemPress = (params: VideoCardProperties) => {
    navigation.navigate("WatchScreen", { slug: params.slug });
  };

  const handleRenderItem = ({ item }: { item: VideoCardProperties }) => (
    <VideoCard {...item} onPress={handleItemPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.updatedAt}>{updatedAt}</Text>
      </View>
      <FlatList
        horizontal
        data={videos}
        renderItem={handleRenderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  infoContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  updatedAt: {
    fontWeight: "400",
    color: "gray",
    fontSize: moderateScale(16),
  },
});
