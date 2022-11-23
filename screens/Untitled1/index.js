import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.UwSbYhXx}>
      <RadioGroup style={_styles.lxYCFCgz} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  UwSbYhXx: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  lxYCFCgz: {
    width: 120,
    height: 70
  }
});