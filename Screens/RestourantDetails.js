import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import About from "../Components/RestourantDetails/About";
import { Divider } from "react-native-elements";
import { food } from "../Constants/Menu";
import MenuItems from "../Components/RestourantDetails/MenuItems";
import ViewCart from "../Components/RestourantDetails/ViewCart";
import { useSelector } from "react-redux";

export default function RestourantDetails({ route, navigation }) {
  const menuFood = food;
  const allItems = useSelector((state) => state.cart.items);

  const selectedItems = allItems.filter(
    (item) => item.restourantName === route.params.name
  );

  const totalPrice = useSelector((state) => state.cart.restourantTotalPrice);

  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={2} style={{ marginVertical: 10 }} />

      <MenuItems
        food={menuFood}
        restourantName={route.params.name}
        selectedItems={selectedItems}
      />
      {selectedItems.length > 0 && (
        <ViewCart
          items={selectedItems}
          restourantName={route.params.name}
          totalPrice={totalPrice.find(
            (p) => p.restourantName === route.params.name
          )}
          navigation={navigation}
        />
      )}
    </View>
  );
}
