import Colors from "@/app/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CategoryButtons() {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x) =>
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
    );
  };
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => {
          const isActive = activeIndex == index;
          console.log(isActive);
          console.log(activeIndex);
          console.log(index);
          
          return (
            <TouchableOpacity
              ref={(el) => (itemRef.current[index] = el)}
              key={index}
              onPress={() => handleSelectCategory(index)}
              style={isActive ? styles.activeCategoryBtn : styles.categoryBtn}
            >
              <MaterialCommunityIcons
                name={item.iconName as any}
                size={20}
                color={isActive ? Colors.white : Colors.black}
              />
              <Text
                style={
                  isActive ? styles.activeCategoryBtnTxt : styles.categoryBtnTxt
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  activeCategoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxt: {
    marginLeft: 5,
    color: Colors.black,
  },
  activeCategoryBtnTxt: {
    marginLeft: 5,
    color: Colors.white,
  },
});
