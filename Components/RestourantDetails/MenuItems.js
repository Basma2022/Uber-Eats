import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { AddItem, RemoveItem } from "../../Redux/Actions/CartActions";
import { useDispatch } from "react-redux";

export default function MenuItems({
  food,
  restourantName,
  selectedItems,
  hideCheckBox,
}) {
  const dispatch = useDispatch();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {food.map((foodItem, index) => (
        <View key={index}>
          <View style={styles.foodContainerStyle}>
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={selectedItems.find(
                  (item) => item.title === foodItem.title
                )}
                onPress={(checkboxValue) => {
                  if (checkboxValue) {
                    AddItem(dispatch, { ...foodItem, restourantName });
                  } else {
                    RemoveItem(dispatch, { ...foodItem, restourantName });
                  }
                }}
              />
            )}
            <FoodInfo foodInfo={foodItem} />
            <FoodImage foodImage={foodItem.image} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ foodInfo }) => (
  <View style={styles.foodInfoContaainerStyle}>
    <Text style={{ fontSize: 19, fontWeight: "bold" }}>{foodInfo.title}</Text>
    <Text>{foodInfo.description}</Text>
    <Text>${foodInfo.price}</Text>
  </View>
);

const FoodImage = ({ foodImage }) => (
  <View>
    <Image
      style={styles.foodImageStyle}
      source={{
        uri: foodImage,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  foodContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  foodInfoContaainerStyle: {
    width: 180,
    justifyContent: "space-evenly",
  },
  foodImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 10,
  },
});
