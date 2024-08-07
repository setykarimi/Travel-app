import Colors from "@/constants/Colors";
import listingData from "@/data/destinations.json";
import { ListingType } from "@/types/listing-type";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
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

  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: 4,
              }}
            >
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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.lisitingLocationTxt}>{listing.location}</Text>
          </View>

          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="time" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Duration</Text>
                <Text style={styles.highlightTxtValue}>
                  {listing.duration} days
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <FontAwesome
                  name="users"
                  size={18}
                  color={Colors.primaryColor}
                />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Person</Text>
                <Text style={styles.highlightTxtValue}>{listing.duration}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="star" size={18} color={Colors.primaryColor} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Rating</Text>
                <Text style={styles.highlightTxtValue}>{listing.rating}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.listingDetails}>{listing.description}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentWrapper: {
    padding: 20,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  lisitingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  highlightWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  highlightIcon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },
  highlightTxt: {
    fontSize: 12,
    color: "#999",
  },
  highlightTxtValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  listingDetails: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
});
