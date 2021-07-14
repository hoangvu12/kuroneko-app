import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "../../components/Themed";
import CategoryLayout from "../../loaders/CategoryLayout";
import Loader from "../../loaders/Loader";
import { CategoryProps } from "../../types";
import Category from "./Category";
import useHomePage from "./useHomePage";

const numbersOfCategory = new Array(2).fill(null);

export default function HomeScreen() {
  const { data, isLoading, isError } = useHomePage();

  if (isLoading) {
    return (
      <Loader style={styles.loadingContainer}>
        {numbersOfCategory.map((_, i) => (
          <CategoryLayout key={i} />
        ))}
      </Loader>
    );
  }

  return (
    <ScrollView style={styles.loadingContainer}>
      {data.map((category: CategoryProps) => (
        <Category {...category} key={category.title} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    padding: 10,
  },
});
