import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

function Home() {
  const data = [
    {
      id: 1,
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: 2,
      name: "Esraa W.Rafati",
      job: "Web Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: 3,
      name: "Mohammed W.Rafati",
      job: "Full-Stack Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: 4,
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
  ];

  return data.map((employee) => {
    return (
      <Card style={styles.myCard} key={employee.id}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: employee.img }}
          />
          <View style={styles.textView}>
            <Text style={styles.text}>{employee.name}</Text>
            <Text>{employee.job}</Text>
          </View>
        </View>
      </Card>
    );
  });
}

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  textView: {
    marginLeft: 20,
  },
  text: {
    fontSize: 24,
  },
});
export default Home;
