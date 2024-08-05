import Colors from "@/constants/Colors";
import listingData from "@/data/destinations.json";
import { ListingType } from "@/types/listing-type";
import { Feather } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

export default function ListingDetails() {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id === id
  );
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View>
        <Image source={{ uri: listing.image }} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
});
