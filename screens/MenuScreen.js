import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

import FoodItem from "../components/FoodItem";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cart.cart);

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };

    fetchMenu();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <ScrollView style={{ marginTop: 30 }}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerButtonsWrapper}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={styles.searchButtonWrapper}>
              <AntDesign name="search1" size={22} color="black" />
              <Text style={styles.searchButtonText}>Search</Text>
            </View>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoHeaderWrapper}>
              <Text style={styles.infoHeaderText}>{route.params.name}</Text>
              <View style={styles.infoHeaderSocials}>
                <AntDesign
                  style={{ marginHorizontal: 7 }}
                  name="sharealt"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>

            <View style={styles.subInfoWrapper}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.subText}>{route.params.rating}</Text>
              <Text style={{ marginLeft: 3 }}> </Text>
              <Text style={styles.subText}>{route.params.time}mins</Text>
            </View>
            <Text style={styles.subCuisine}>{route.params.cuisines}</Text>
            <View style={styles.subOutletWrapper}>
              <Text>Outlet</Text>
              <Text style={styles.subOutletAdress}>{route.params.adress}</Text>
            </View>
            <View style={styles.subDeliveryWrapper}>
              <Text>22 mins</Text>
              <Text style={styles.subDeliveryText}>Home</Text>
            </View>
            <Text style={styles.subLine} />

            <View style={styles.deliveryWrapper}>
              <FontAwesome5 name="bicycle" size={24} color="orange" />
              <Text style={styles.deliveryRange}>0-3 Kms |</Text>
              <Text style={styles.deliveryText}>
                35 Delivery Fee will Apply
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.menuText}>MENU</Text>
        <Text style={styles.screenLine} />

        {route.params.menu.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}
      </ScrollView>

      <Pressable style={styles.menuButton} onPress={toggleModal}>
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text style={styles.menuButtonText}>MENU</Text>
      </Pressable>

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalWrapper}>
          {menu.map((item, i) => (
            <View style={styles.modalItemWrapper} key={i}>
              <Text style={styles.modalItemText}>{item.name}</Text>
              <Text style={styles.modalItemText}>{item.items.length}</Text>
            </View>
          ))}
          <View style={styles.modalLogoWrapper}>
            <Image
              style={styles.modalLogo}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>

      {total === 0 ? null : (
        <Pressable style={styles.modalCartButton}>
          <View style={styles.modalCartWrapper}>
            <View>
              <Text style={styles.modalCartItems}>
                {cart.length} items | {total}
              </Text>
              <Text style={styles.modalCartCharges}>
                Extra Charges may Apply!
              </Text>
            </View>

            <Pressable
              onPress={() =>
                navigation.navigate("Cart", {
                  name: route.params.name,
                })
              }
            >
              <Text style={styles.modalCartOpen}>View Cart</Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 300,
    backgroundColor: "#B0C4DE",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerButtonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  searchButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 7,
  },
  infoWrapper: {
    backgroundColor: "white",
    height: 210,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
  },
  infoHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoHeaderText: { fontSize: 19, fontWeight: "bold" },
  infoHeaderSocials: { flexDirection: "row", alignItems: "center" },
  subInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  subText: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: "400",
  },
  subCuisine: { marginTop: 8, color: "gray", fontSize: 17 },
  subOutletWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  subOutletAdress: { marginLeft: 15, fontSize: 15, fontWeight: "bold" },
  subDeliveryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  subDeliveryText: { marginLeft: 15, fontSize: 14, fontWeight: "bold" },
  subLine: {
    borderColor: "gray",
    borderWidth: 0.6,
    height: 1,
    marginTop: 12,
  },
  deliveryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  deliveryRange: { marginLeft: 7, color: "gray", fontSize: 16 },
  deliveryText: { marginLeft: 7, color: "gray", fontSize: 16 },
  menuText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 10,
  },
  screenLine: {
    borderColor: "gray",
    borderWidth: 0.6,
    height: 1,
    marginTop: 12,
  },
  menuButton: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "black",
    marginLeft: "auto",
    position: "absolute",
    bottom: 35,
    right: 25,
    alignContent: "center",
  },
  menuButtonText: { textAlign: "center", color: "white", fontWeight: "500" },
  modalWrapper: {
    height: 190,
    width: 250,
    backgroundColor: "black",
    position: "absolute",
    bottom: 35,
    right: 10,
    borderRadius: 7,
  },
  modalItemWrapper: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalItemText: { color: "#D0D0D0", fontWeight: "600", fontSize: 19 },
  modalLogoWrapper: { justifyContent: "center", alignItems: "center" },
  modalLogo: { width: 120, height: 70, resizeMode: "contain" },
  modalCartButton: {
    backgroundColor: "#00A877",
    width: "90%",
    padding: 13,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    position: "absolute",
    borderRadius: 8,
    left: 20,
    bottom: 10,
  },
  modalCartWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalCartItems: { fontSize: 16, fontWeight: "bold", color: "white" },
  modalCartCharges: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 3,
    color: "white",
  },
  modalCartOpen: { fontSize: 18, fontWeight: "600", color: "white" },
});
