import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function Page() {
  return (
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
          <TouchableOpacity onPress={() => {}} style={{ marginRight: 20 }}>
            <Ionicons name="notifications" size={20} color={Colors.black} />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
