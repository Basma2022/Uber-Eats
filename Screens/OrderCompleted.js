import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import MenuItems from "../Components/RestourantDetails/MenuItems";
import { ScrollView } from "react-native";

export default function OrderCompleted({ route }) {
  const { items, restourantName, totalPrice } = route.params;
  return (
    <SafeAreaView style={styles.areaViewStyle}>
      <View style={styles.orderContainerStyle}>
        <AnimatedLottieView
          style={styles.checkMarkStyle}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.titleStyle}>
          Your order at {restourantName} has been placed for {totalPrice} $ 🚀
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            food={items}
            restourantName={restourantName}
            hideCheckBox={true}
          />

          <AnimatedLottieView
            style={styles.cookingStyle}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaViewStyle: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  orderContainerStyle: {
    margin: 15,
    alignItems: "center",
    height: "100%",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkMarkStyle: { height: 100, alignSelf: "center", marginBottom: 30 },
  cookingStyle: { width: 250, alignSelf: "center", marginBottom: 20 },
});
