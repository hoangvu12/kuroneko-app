import * as React from "react";
import { ScrollView } from "../../components/Themed";
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
