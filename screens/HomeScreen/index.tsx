import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ScrollView } from "../../components/Themed";
import VideoCard from "../../components/VideoCard";

import { data } from "../../data/videos.json";
import Category from "./Category";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {data.map((category) => (
        <Category {...category} key={category.title} />
      ))}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({

// });
