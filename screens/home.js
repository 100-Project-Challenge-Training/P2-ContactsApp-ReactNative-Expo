import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Home() {
  const data = [
    {
      id: "1",
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "2",
      name: "Esraa W.Rafati",
      job: "Web Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "3",
      name: "Mohammed W.Rafati",
      job: "Full-Stack Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "4",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "5",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "6",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "7",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "8",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "9",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "10",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "11",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "12",
      name: "Maram W.Rafati",
      job: "React Developer",
      img: "https://thispersondoesnotexist.com/image",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Card style={styles.myCard} key={item.id}>
              <View style={styles.cardView}>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  source={{ uri: item.img }}
                />
                <View style={styles.textView}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text>{item.job}</Text>
                </View>
              </View>
            </Card>
          );
        }}
      />
      <FAB
        style={styles.fab}
        small={false}
        theme={{colors: {accent:'#006aff'}}}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
