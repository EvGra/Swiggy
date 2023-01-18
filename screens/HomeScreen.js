import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchBarWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <Carousel />
      <FoodTypes />
      <QuickFood />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
  textInput: {
    fontSize: 17,
  },
});
