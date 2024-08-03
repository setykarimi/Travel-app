import { GroupType } from "@/types/group-type";
import React from "react";
import { FlatList, Text, View } from "react-native";
import GroupItem from "./group-item";

export default function GroupListing({ listings }: { listings: GroupType[] }) {
  return (
    <View>
      <Text>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={GroupItem} />
    </View>
  );
}
