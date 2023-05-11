import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Calc = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "AC"];
  const ops = ["+", "-", "*", "/"];

  return (
    <View style={styles.container}>
      <View style={{ width: 320, height: 80, backgroundColor: "#fff" }}></View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", width: 240 }}>
          {nums.map((num) => {
            return (
              <View key={num} style={styles.numButton}>
                <Text style={styles.text}>{num}</Text>
              </View>
            );
          })}
        </View>
        <View style={{}}>
          {ops.map((op) => {
            return (
              <View key={op} style={styles.numButton}>
                <Text style={styles.text}>{op}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          width: 320,
          height: 80,
          backgroundColor: "#f3e66e",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
          }}
        >
          =
        </Text>
      </View>
    </View>
  );
};

export default Calc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 480,
    width: 320,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#303344",
    borderRadius: 50,
    overflow: "hidden",
  },
  numButton: {
    width: 80,
    height: 80,
    backgroundColor: "#000000",
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
