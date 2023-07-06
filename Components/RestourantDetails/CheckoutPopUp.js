import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useCallback } from "react";
import firebase from "../../Firebase";

export default function CheckoutPopUp({
  setModelVisibility,
  items,
  restourantName,
  totalPrice,
  navigation,
}) {
  const addOrderToFirebase = () => {
    const db = firebase.firestore();
    db.collection("Orders").add({
      items: items,
      restourantName: restourantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      totalPrice: totalPrice.totalPrice,
    });

    navigation.navigate("Order", {
      items: items,
      restourantName: restourantName,
      totalPrice: totalPrice.totalPrice,
    });
    setModelVisibility(false);
  };
  return (
    <View style={styles.modalContainerStyle}>
      <View style={styles.popupContainerStyle}>
        <Text style={styles.restourantNameStyle}>{restourantName}</Text>
        <View>
          {items.map((item, index) => (
            <OrderItem key={index} name={item.title} price={item.price} />
          ))}

          <SubTotal totalPrice={totalPrice} />
        </View>
        <TouchableOpacity
          style={styles.checkoutButtonStyle}
          onPress={() => addOrderToFirebase()}
        >
          <Text style={styles.checkotTextStyle}>Checkout</Text>
          {totalPrice && (
            <Text style={styles.totalPriceStyle}>
              {totalPrice.totalPrice.toFixed(1)} $
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const OrderItem = ({ name, price }) => (
  <View style={styles.OrderItemContainerStyle}>
    <Text style={styles.textItemStyle}>{name}</Text>
    <Text style={styles.priceItemStyle}>{price} $</Text>
  </View>
);

const SubTotal = ({ totalPrice }) => (
  <View style={styles.SubTotalContainerStyle}>
    <Text style={styles.textItemStyle}>Total Price</Text>
    {totalPrice && (
      <Text style={styles.textItemStyle}>
        {totalPrice.totalPrice.toFixed(1)}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  modalContainerStyle: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "flex-end",
  },
  popupContainerStyle: {
    backgroundColor: "white",
    padding: 13,
    height: 500,
    borderWidth: 1,
  },
  restourantNameStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  OrderItemContainerStyle: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  textItemStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priceItemStyle: {
    fontSize: 16,
    opacity: 0.7,
  },
  SubTotalContainerStyle: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  checkoutButtonStyle: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 30,
    width: 300,
    marginTop: 20,
    position: "relative",
    padding: 13,
  },
  checkotTextStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPriceStyle: {
    position: "absolute",
    right: 20,
    color: "white",
    fontSize: 15,
    top: 17,
  },
});
