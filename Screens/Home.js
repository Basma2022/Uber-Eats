import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import HeaderTabs from "../Components/Home/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import Categories from "../Components/Home/Categories";
import RestourantItems from "../Components/Home/RestourantItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllRestourants } from "../Redux/Actions/RestourantsActions";
import { useState } from "react";
import BottomTabs from "../Components/Home/BottomTabs";
import { Divider } from "react-native-elements";
import Loading from "../Components/Loading";
import {
  defaultActiveTab,
  defaultCity,
  grayColor,
} from "../Constants/DefaultData";

export default function Home({ navigation }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const restourants = useSelector((state) => state.restourant.restourants);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllRestourants(dispatch, activeTab, currentCity);
  }, [dispatch, activeTab, currentCity]);

  return (
    <SafeAreaView style={styles.androidStyle}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCurrentCity={setCurrentCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {restourants ? (
          <RestourantItems
            restourantsData={restourants}
            navigation={navigation}
          />
        ) : (
          <Loading curHeight={400} />
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidStyle: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: grayColor,
    flex: 1,
  },
});
