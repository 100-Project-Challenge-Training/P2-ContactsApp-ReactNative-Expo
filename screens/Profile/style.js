import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  linearGradient: {
    height: "20%",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    marginTop: -90,
  },
  name: {
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    margin: 5,
  },
  inCard: {
    flexDirection: "row",
    padding: 8,
  },
  text: { fontSize: 18, marginTop: 5, marginLeft: 10 },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export const theme = { colors: { primary: "#3D19F7" } };
