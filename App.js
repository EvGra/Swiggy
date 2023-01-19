import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import StackNavigator from "./StackNavigator";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
