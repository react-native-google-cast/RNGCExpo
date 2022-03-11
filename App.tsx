import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CastButton, useCastState } from "react-native-google-cast";

export default function App() {
  const status = useCastState();

  console.log(status);

  return (
    <View style={styles.container}>
      <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />

      <Text>Open up App.tsx to start working on your app!</Text>
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
