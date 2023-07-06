import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { changeCity } from "../../Constants/APIData";
import { grayColor } from "../../Constants/DefaultData";

export default function ({ city, setCurrentCity }) {
  return (
    <View style={styles.goaglePlacesContainerStyles}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCjaR2FYaI5y_foVZuGnsc9uMOanQrEr2o" }}
        onPress={(data, details = null) => {
          setCurrentCity(data.description.split(",")[0]);
        }}
        placeholder="Search"
        styles={styles.googlePlacesStyles}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <IonIcon name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.RightButtonStyles}>
            <AntDesign
              style={{ marginRight: 6 }}
              name="clockcircle"
              size={11}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goaglePlacesContainerStyles: {
    marginTop: 10,
    flexDirection: "row",
  },

  googlePlacesStyles: {
    textInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: grayColor,
      borderRadius: 50,
      marginRight: 10,
    },
    textInput: {
      borderRadius: 20,
      fontWeight: "bold",
      marginTop: 7,
      backgroundColor: grayColor,
    },
  },
  RightButtonStyles: {
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
});
