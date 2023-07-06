import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.HeaderButtonContainerStyle}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="PickUp"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      ...styles.HeaderButtonStyle,
      backgroundColor: props.activeTab === props.text ? "black" : "white",
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        ...styles.HeaderButtonTextStye,
        color: props.activeTab === props.text ? "white" : "black",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  HeaderButtonContainerStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },

  HeaderButtonStyle: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: "black",
    borderRadius: 20,
  },
  HeaderButtonTextStye: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
