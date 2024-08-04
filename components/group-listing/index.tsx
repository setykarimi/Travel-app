import Colors from "@/constants/Colors";
import { GroupType } from "@/types/group-type";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GroupItem from "./group-item";

export default function GroupListing({ listings }: { listings: GroupType[] }) {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        horizontal
        data={listings}
        renderItem={GroupItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
});
