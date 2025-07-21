import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CastButton } from "react-native-google-cast";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />;
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
