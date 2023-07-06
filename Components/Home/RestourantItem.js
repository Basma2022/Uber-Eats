import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestourantItems = ({ navigation, ...props }) => {
  return props.restourantsData.map((restourant, index) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          name: restourant.name,
          image: restourant.image_url,
          price: restourant.price,
          reviews: restourant.review_count,
          rating: restourant.rating,
          categories: restourant.categories,
        })
      }
      key={index}
      activeOpacity={0.5}
      style={{ marginBottom: 15 }}
    >
      <View style={styles.restourantItemsContainer}>
        <RestourantImage imageURL={restourant.image_url} />
        <RestourantText name={restourant.name} rating={restourant.rating} />
      </View>
    </TouchableOpacity>
  ));
};

const RestourantImage = ({ imageURL }) => (
  <View>
    <Image
      style={styles.restourantImageStyle}
      source={{
        uri: imageURL,
      }}
    ></Image>
    <TouchableOpacity style={styles.favIconContainerStyle}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);

const RestourantText = ({ name, rating }) => (
  <View style={styles.restourantTextContainerStyle}>
    <View>
      <Text style={styles.restourantNameStyle}>{name}</Text>
      <Text style={styles.timeTextStyle}>33-45 min</Text>
    </View>
    <View style={styles.ratingTextContainerStyle}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restourantItemsContainer: {
    padding: 15,
    marginTop: 10,
    backgroundColor: "white",
  },
  restourantImageStyle: {
    width: "100%",
    height: 180,
  },
  restourantTextContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    paddingHorizontal: 2,
  },
  restourantNameStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  timeTextStyle: {
    fontSize: 13,
    color: "gray",
  },
  ratingTextContainerStyle: {
    borderRadius: 20,
    backgroundColor: "#eee",
    padding: 5,
  },
  favIconContainerStyle: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default RestourantItems;
