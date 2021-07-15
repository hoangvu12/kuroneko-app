import React, { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { moderateScale } from "../../utils/scale";
import useSearch from "./useSearch";
import { VideoCardProperties } from "../../types";
import VideoCard from "../../components/VideoCard";

import ColumnVideoCardLayout from "../../loaders/ColumnVideoCardLayout";

const PLACEHOLDER = "Nhập từ khóa";

const { height: windowHeight } = Dimensions.get("window");

const handleRenderItem = ({ item }: { item: VideoCardProperties }) => (
  <VideoCard {...item} />
);

const keyExtractor = (item: VideoCardProperties) => item.slug;

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const { data, isLoading, isError, refetch } = useSearch({ keyword });

  const onChange = (text: string) => {
    setKeyword(text);

    if (timeout.current) {
      timeout.current = null;
    }

    timeout.current = setTimeout(refetch, 1500);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: colors.tabIconDefault },
        ]}
      >
        <TextInput
          placeholder={PLACEHOLDER}
          style={[styles.input, { color: colors.text }]}
          value={keyword}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.resultsContainer}>
        {isLoading ? (
          <ColumnVideoCardLayout />
        ) : (
          <FlatList
            data={data}
            renderItem={handleRenderItem}
            numColumns={2}
            keyExtractor={keyExtractor}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    height: windowHeight / 10,
    paddingVertical: 10,
  },
  resultsContainer: {
    flex: 1,
    padding: 10,
  },
  input: {
    fontSize: moderateScale(30),
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
});
