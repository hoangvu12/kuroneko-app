import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "../../components/Themed";
import Loader from "../../loaders/Loader";
import SectionLayout from "../../loaders/SectionLayout";
import { SectionProps } from "../../types";
import Section from "./Section";
import useHomePage from "./useHomePage";

const numbersOfCategory = new Array(2).fill(null);

export default function HomeScreen() {
  const { data, isLoading, isError } = useHomePage();

  if (isLoading) {
    return (
      <Loader style={styles.loadingContainer}>
        {numbersOfCategory.map((_, i) => (
          <SectionLayout key={i} />
        ))}
      </Loader>
    );
  }

  return (
    <ScrollView style={styles.loadingContainer}>
      {data?.map((section: SectionProps) => (
        <Section {...section} key={section.title} />
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
