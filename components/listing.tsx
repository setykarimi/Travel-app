import { ListingType } from "@/types/listing-type";
import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  listings: any;
}

export default function Listing({ listings }: Props) {
  const renderItem: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image source={{ uri: item.image }} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
