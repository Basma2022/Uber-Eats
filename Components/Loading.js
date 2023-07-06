import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function Loading({ curHeight }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: curHeight,
      }}
    >
      <AnimatedLottieView
        speed={3}
        source={require("../assets/animations/scanner.json")}
        autoPlay
        style={{
          height: 80,
        }}
      />
    </View>
  );
}
