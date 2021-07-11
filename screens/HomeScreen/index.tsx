import * as React from "react";
import SkeletonContent from "react-native-skeleton-content";

import { ScrollView } from "../../components/Themed";
import Loader, { mergeLayouts } from "../../loaders/Loader";
import CategoryLoader from "../../loaders/CategoryLoader";
// import { data } from "../../data/videos.json";
import Category from "./Category";
import useHomePage from "./useHomePage";
import { CategoryProps } from "../../types";

export default function HomeScreen() {
  const { data, isLoading, isError } = useHomePage();

  if (isLoading) {
    return (
      <Loader
        layout={[CategoryLoader(), CategoryLoader()]}
        isLoading={isLoading}
        containerStyle={{ padding: 10 }}
      />
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {data.map((category: CategoryProps) => (
        <Category {...category} key={category.title} />
      ))}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({

// });
