import Colors from "@/constants/Colors";
import { GroupType } from "@/types/group-type";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ListRenderItem, StyleSheet, Text, View } from "react-native";

const GroupItem: ListRenderItem<GroupType> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.itemTxt}>{item.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="star" size={20} color={Colors.primaryColor} />
          <Text style={styles.itemRating}>{item.rating}</Text>
          <Text style={styles.itemReview}>({item.reviews})</Text>
        </View>
      </View>
    </View>
  );
};

export default GroupItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 8
  },
  itemRating:{
    fontSize: 14,
    fontWeight:'600',
    color: Colors.black,
    marginLeft: 5
  },
  itemReview:{
    fontSize: 14,
    color: '#999'
  }
});
