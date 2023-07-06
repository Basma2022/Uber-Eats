import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "react-native";
import CheckoutPopUp from "./CheckoutPopUp";

export default function ViewCart({
  items,
  restourantName,
  totalPrice,
  navigation,
}) {
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [modelVisibility, setModelVisibility] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modelVisibility}
        onRequestClose={() => setModelVisibility(false)}
      >
        <CheckoutPopUp
          setModelVisibility={setModelVisibility}
          items={items}
          restourantName={restourantName}
          totalPrice={totalPrice}
          navigation={navigation}
        />
      </Modal>
      <View style={styles.parentContainer}>
        <View style={styles.viewCartContainerStyle}>
          <TouchableOpacity
            style={styles.tochableStyle}
            activeOpacity={0.7}
            onPress={() => setModelVisibility(true)}
          >
            <Text style={styles.viewCartTextStyle}>View Cart </Text>
            {totalPrice && (
              <Text style={styles.viewCartTextStyle}>
                {totalPrice.totalPrice.toFixed(1)}$
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    zIndex: 999,
    // display: "none",
  },
  viewCartContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  tochableStyle: {
    alignItems: "center",
    borderRadius: 30,
    padding: 10,
    width: 250,
    backgroundColor: "black",
    marginTop: 20,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  viewCartTextStyle: {
    color: "white",
    fontSize: 20,
  },
});
