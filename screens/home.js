import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

function Home() {
  return (
    <Card style={styles.myCard}>
      <Text style={{ fontSize: 24 }}>Hello from Home page</Text>
      {/* <Text>hello again</Text> */}
    </Card>
  );
}

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
    padding: 5,
  },
});
export default Home;
