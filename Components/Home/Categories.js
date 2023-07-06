import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { categoryItems } from "../../Constants/categoryItems";

export default function Categories() {
  return (
    <View style={styles.categoryContainerStyle}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryItems.map((item, index) => (
          <ItemCategory key={index} image={item.image} text={item.text} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: { width: 50, height: 40, resizeMode: "contain" },

  categoryContainerStyle: {
    margin: 2,
    backgroundColor: "white",
    paddingVertical: 3,
  },

  categoryItemStyle: {
    padding: 5,
    alignItems: "center",
  },

  iconTextStyle: {
    fontWeight: "bold",
  },
});

const ItemCategory = (props) => (
  <View style={styles.categoryItemStyle}>
    <Image style={styles.iconStyle} source={props.image} />
    <Text style={styles.iconTextStyle}>{props.text}</Text>
  </View>
);
