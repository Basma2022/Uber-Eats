import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(".");
  const description = `${formattedCategories} ${
    price ? "." + price : ""
  } . 🎫 . ${rating} ⭐ ${reviews ? reviews + "+" : ""}`;
  return (
    <View>
      <RestourantImage image={image} />
      <RestourantTitle title={name} />
      <RestourantDescription description={description} />
    </View>
  );
}

const RestourantImage = ({ image }) => (
  <Image
    style={styles.restourantImageStyle}
    source={{
      uri: image,
    }}
  ></Image>
);

const RestourantTitle = ({ title }) => (
  <Text style={styles.restourantTitleStyle}>{title}</Text>
);

const RestourantDescription = ({ description }) => (
  <View>
    <Text style={styles.restourantDescriptionStyle}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  restourantImageStyle: {
    with: "100%",
    height: 200,
  },
  restourantTitleStyle: {
    fontSize: 29,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 15,
  },
  restourantDescriptionStyle: {
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical: 5,
  },
});
