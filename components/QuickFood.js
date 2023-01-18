import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import quickfood from "../data/quickfood";

const QuickFood = () => {
  const data = quickfood;
  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.header}>Get in Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={styles.itemBg}
              source={{ uri: item.image }}
            >
              <Text style={styles.itemText}>{item.offer} OFF</Text>
            </ImageBackground>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.infoWrapper}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.subText}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}> </Text>
              <Text style={styles.subText}>{item.time}mins</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemBg: {
    aspectRatio: 5 / 6,
    height: 170,
  },
  itemText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  itemName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  subText: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: "400",
  },
});
