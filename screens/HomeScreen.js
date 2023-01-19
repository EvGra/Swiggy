import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
  const data = hotels;

  return (
    <ScrollView>
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
      <View style={styles.filterButtonsWrapper}>
        <Pressable style={styles.filterButton}>
          <Text>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable style={styles.filterButton}>
          <Text>Sort by Rating</Text>
        </Pressable>
        <Pressable style={styles.filterButton}>
          <Text>Sort by Price</Text>
        </Pressable>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    marginTop: 30,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
  textInput: {
    fontSize: 17,
  },
  filterButton: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  filterButtonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
