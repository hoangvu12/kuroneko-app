import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ModalSelector from "react-native-modal-selector";
import { View } from "../components/Themed";
import VideoCard from "../components/VideoCard";
import Colors from "../constants/Colors";
import { data } from "../data/category.json";
import useColorScheme from "../hooks/useColorScheme";
import { VideoCardProps } from "../types";

type Category = {
  name: string;
  slug: string;
  tabLabel?: string;
};

const CATEGORIES: Category[] = [
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

export default function CategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [page, setPage] = useState(1);

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <ModalSelector
        data={CATEGORIES.map(({ slug, name }) => ({ key: slug, label: name }))}
        cancelText="Hủy"
        initValue={selectedCategory.name}
        onChange={(option) => {
          setSelectedCategory({ name: option.label, slug: option.key });
        }}
        style={{ backgroundColor: colors.background, paddingBottom: 10 }}
        initValueTextStyle={{ color: colors.text }}
      />

      <FlatList
        data={data.videos}
        renderItem={({ item }: { item: VideoCardProps }) => (
          <VideoCard {...item} />
        )}
        key={selectedCategory.name}
        numColumns={2}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
