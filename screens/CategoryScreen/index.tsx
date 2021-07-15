import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import VideoCard from "../../components/VideoCard";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import ColumnVideoCardLayout from "../../loaders/ColumnVideoCardLayout";
import { CategoryType, VideoCardProperties } from "../../types";
import { moderateScale } from "../../utils/scale";
import useCategory from "./useCategory";

const CATEGORIES: CategoryType[] = [
  { name: "3D", slug: "3d" },
  { name: "Ahegao", slug: "ahegao" },
  { name: "Anal", slug: "anal" },
  { name: "BDSM", slug: "bdsm" },
  { name: "Big Boobs", slug: "big-boobs" },
  { name: "Blow Job", slug: "blow-job" },
  { name: "Bondage", slug: "bondage" },
  { name: "Boob Job", slug: "boob-job" },
  { name: "Cosplay", slug: "cosplay" },
  { name: "Dark Skin", slug: "dark-skin" },
  { name: "Demon", slug: "demon" },
  { name: "Double Penetration", slug: "double-penetration" },
  { name: "Đồ Bơi", slug: "do-boi" },
  { name: "Elf", slug: "elf" },
  { name: "Fantasy", slug: "fantasy" },
  { name: "Femdom", slug: "femdom" },
  { name: "Foot Job", slug: "foot-job" },
  { name: "Futanari", slug: "futanari" },
  { name: "Gang Bang", slug: "gang-bang" },
  { name: "Gender Bender", slug: "gender-bender" },
  { name: "Golden shower", slug: "golden-shower" },
  { name: "Guro", slug: "guro" },
  { name: "Hài Hước", slug: "hai-huoc" },
  { name: "Harem", slug: "harem" },
  { name: "Idol", slug: "idol" },
  { name: "Josei", slug: "josei" },
  { name: "Kemonomimi", slug: "kemonomimi" },
  { name: "Lactation", slug: "lactation" },
  { name: "Loạn luân", slug: "loan-luan" },
  { name: "Loli", slug: "loli" },
  { name: "Magical Girl", slug: "magical-girl" },
  { name: "Maid", slug: "maid" },
  { name: "Manga", slug: "manga" },
  { name: "Megane", slug: "megane" },
  { name: "MILF", slug: "milf" },
  { name: "Mind Break", slug: "mind-break" },
  { name: "Mind Control", slug: "mind-control" },
  { name: "Monster", slug: "monster" },
  { name: "Monster Girl", slug: "monster-girl" },
  { name: "NTR", slug: "ntr" },
  { name: "Orgy", slug: "orgy" },
  { name: "Plot", slug: "plot" },
  { name: "Pregnant", slug: "pregnant" },
  { name: "Rape", slug: "rape" },
  { name: "Romance", slug: "romance" },
  { name: "Scat", slug: "scat" },
  { name: "School Girl", slug: "school-girl" },
  { name: "Sci-Fi", slug: "sci-fi" },
  { name: "Sex Toy", slug: "sex-toy" },
  { name: "Shota", slug: "shota" },
  { name: "Slice of Life", slug: "slice-of-life" },
  { name: "Softcore", slug: "softcore" },
  { name: "Stocking", slug: "stocking" },
  { name: "Succubus", slug: "succubus" },
  { name: "Supernatural", slug: "supernatural" },
  { name: "Teacher", slug: "teacher" },
  { name: "Tentacle", slug: "tentacle" },
  { name: "Threesome", slug: "threesome" },
  { name: "Thủ Dâm", slug: "thu-dam" },
  { name: "Trap", slug: "trap" },
  { name: "Tsundere", slug: "tsundere" },
  { name: "Twin", slug: "twin" },
  { name: "Ugly Bastard", slug: "ugly-bastard" },
  { name: "Vanilla", slug: "vanilla" },
  { name: "Virgin", slug: "virgin" },
  { name: "Y tá", slug: "y-ta" },
  { name: "Yaoi", slug: "yaoi" },
  { name: "Yuri", slug: "yuri" },
];

const handleRenderItem = ({ item }: { item: VideoCardProperties }) => (
  <VideoCard {...item} />
);

const keyExtractor = (item: VideoCardProperties) => item.slug;

export default function CategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].slug);

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useCategory(selectedCategory);

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  if (isError)
    return (
      <View>
        <Text>is error</Text>
      </View>
    );

  const handleEndReached = () => {
    if (isFetchingNextPage || isLoading || !hasNextPage) {
      return;
    }

    fetchNextPage();
  };

  const list = data?.pages.map((page) => page.videos).flat();

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={[
            styles.picker,
            {
              backgroundColor: colors.background,
              color: colors.text,
            },
          ]}
        >
          {CATEGORIES.map((category) => (
            <Picker.Item
              key={category.slug}
              label={category.name}
              value={category.slug}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.videosContainer}>
        {isLoading ? (
          <ColumnVideoCardLayout />
        ) : (
          <FlatList
            data={list}
            renderItem={handleRenderItem}
            key={selectedCategory}
            numColumns={2}
            keyExtractor={keyExtractor}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.05}
            ListFooterComponentStyle={{ opacity: isFetchingNextPage ? 1 : 0 }}
            ListFooterComponent={
              <View
                style={{
                  padding: 10,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator />
              </View>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  pickerContainer: { flex: 1, marginBottom: 20 },
  picker: {
    height: "100%",
    width: "100%",
    fontSize: moderateScale(18),
    paddingHorizontal: 10,
    borderWidth: 0,
    elevation: 0,
  },
  videosContainer: {
    flex: 12,
  },
});
