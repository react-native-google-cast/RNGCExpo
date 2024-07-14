import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CastButton } from "react-native-google-cast";

export default function App() {
  return (
    <View style={styles.container}>
      <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />
      <Text>Click on the Cast button</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
