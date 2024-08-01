import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./list-item";

interface Props {
  listings: any;
}

export default function Listing({ listings }: Props) {
  return (
    <View>
      <FlatList
        data={listings}
        renderItem={ListItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
