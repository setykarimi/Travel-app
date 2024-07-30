import CategoryButtons from "@/components/category-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Listing from "@/components/listing";
import listingData from "../../data/destinations.json";

export default function Page() {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("");

  const onCatChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={styles.headerRight}>
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { padding: headerHeight }]}>
        <Text style={styles.headingText}>Explore The beautiful World!</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5, color: Colors.black }}
            />
            <TextInput placeholder="Search ..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons onCategoryChanged={onCatChanged} />
        <Listing listings={listingData}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  headerRight: {
    marginRight: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
