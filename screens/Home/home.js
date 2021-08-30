import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Card, FAB } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { styles } from "./style";
function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    fetch("https://contactsapp-reactnativ.herokuapp.com/")
      .then((res) => res.json())
      .then((newData) => {
        console.log("from home uuseEEEEeefect fetch", newData);
        setData(newData);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert(`error in home fetching, ${err}`);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.root}>
      {console.log("hhnnnnnnnnnn", data)}
      {/* {loading ? (
        <ActivityIndicator size="large" />
      ) : ( */}
      <FlatList
        data={data}
        onRefresh={() => fetchData()}
        refreshing={loading}
        keyExtractor={(item) => item._id}
        renderItem={(item) => {
          console.log("from flaaaaaatlist", item.item);
          return (
            <Card
              style={styles.myCard}
              key={item.item._id}
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
      {/* )} */}
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
