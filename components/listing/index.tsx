import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "./list-item";

interface Props {
  listings: any;
  category: string;
}

export default function Listing({ listings, category }: Props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={ListItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
