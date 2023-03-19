import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SingIn, LogIn } from "./src/Screens";

export default function App() {
  return (
    <View style={styles.container}>
      <SingIn />
      {/* <LogIn /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});
