import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { bottomIconsData } from "../../Constants/BottomTabsData";

export default function BottomTabs() {
  return (
    <View style={styles.bottomTabsContainerStyle}>
      {bottomIconsData.map((iconData, index) => (
        <IconBottom key={index} icon={iconData.icon} text={iconData.text} />
      ))}
    </View>
  );
}

const IconBottom = ({ icon, text }) => (
  <View style={styles.iconContainerStyle}>
    <FontAwesome5 name={icon} size={27} />
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  bottomTabsContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 20,
  },
  iconContainerStyle: {
    alignItems: "center",
  },
});
