import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.nejIoQHl}>
      <Pressable onPress={() => navigation.navigate("documents")} style={_styles.yKXfEJAA}><Text style={_styles.vaDzZmKp}>Click to Navigate To Documents</Text></Pressable></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  nejIoQHl: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  vaDzZmKp: {
    left: 82,
    top: 403,
    position: "absolute",
    width: 207,
    height: 115,
    lineHeight: 24,
    fontSize: 24,
    borderRadius: 0,
    fontFamily: "Roboto",
    fontWeight: "700"
  },
  yKXfEJAA: {
    position: "unset"
  }
});