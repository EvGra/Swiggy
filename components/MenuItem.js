import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MenuItem = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <Pressable style={{ flexDirection: "row" }}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={styles.itemImage}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={styles.itemIcon}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.infoWrapper}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={styles.subText}>{item.rating}</Text>
            <Text style={{ marginLeft: 3 }}> </Text>
            <Text style={styles.subText}>{item.time}mins</Text>
          </View>

          <Text style={styles.itemAdress}>{item.adress}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,

                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  itemImage: {
    aspectRatio: 4 / 5,
    height: 150,
    borderRadius: 8,
  },
  itemIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  itemName: {
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
  itemAdress: {
    fontSize: 15,
    color: "gray",
    marginTop: 6,
  },
});
