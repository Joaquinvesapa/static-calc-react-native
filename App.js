import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Calc from "./src/calc";

export default function App() {
  return (
    <View style={styles.container}>
      <Calc />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303344",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 50,
    // overflow: "hidden",
  },
});
