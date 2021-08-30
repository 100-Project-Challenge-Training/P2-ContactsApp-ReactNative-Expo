import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { styles } from "./style";
function Home(props) {
  const data = [
    {
      id: "1",
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      email: "rrtat@srta",
      phone: "0786226903",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "2",
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      email: "rrtat@srta",
      Phone: "7676",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "3",
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      email: "rrtat@srta",
      Phone: "7676",
      img: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "4",
      name: "Abeer W.Rafati",
      job: "React-Native Developer",
      email: "rrtat@srta",
      Phone: "7676",
      img: "https://thispersondoesnotexist.com/image",
    },
  ];

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={(item) => {
          console.log(item);
          return (
            <Card
              style={styles.myCard}
              key={item.item.id}
              onPress={() =>
                props.navigation.navigate("Profile", { item: item.item })
              }
            >
              <View style={styles.cardView}>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  source={{ uri: item.item.img }}
                />
                <View style={styles.textView}>
                  <Text style={styles.text}>{item.item.name}</Text>
                  <Text>{item.item.job}</Text>
                </View>
              </View>
            </Card>
          );
        }}
      />
      <FAB
        onPress={() => props.navigation.navigate("CreateContact")}
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: "#3D19F7" } }}
        icon="plus"
      />
    </View>
  );
}

export default Home;
