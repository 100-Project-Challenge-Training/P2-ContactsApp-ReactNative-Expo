import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import { styles, theme } from "./style";

function Profile(props) {
  const { id, name, job, phone, email, img } = props.route.params.item;
  console.log("props.route.params.item", props.route.params.item);
  function call() {
    Platform.OS === "android"
      ? Linking.openURL(`tel:${phone}`)
      : Linking.openURL(`telprompt:${phone}`);
  }

  function whatsApp() {
    let url = `whatsapp://send?text= "whatsAppMsg" &phone=962${phone}`; //msg and num should add
    Linking.openURL(url);
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#4004D4", "#BAB5F4"]}
        style={styles.linearGradient}
      />
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={{ uri: img }} />
      </View>
      <View style={styles.name}>
        <Title style={{ fontSize: 25 }}>{name}</Title>
        <Text style={{ fontSize: 18 }}>{job}</Text>
      </View>
      <View style={{ margin: 7 }}>
        <Card style={styles.card} onPress={() => call()}>
          <View style={styles.inCard}>
            <Entypo name="phone" size={32} color="#4004D4" />
            <Text style={styles.text}>{phone}</Text>
          </View>
        </Card>
        <Card style={styles.card} onPress={() => whatsApp()}>
          <View style={styles.inCard}>
            <FontAwesome name="whatsapp" size={32} color="#4004D4" />
            <Text style={styles.text}>{phone}</Text>
          </View>
        </Card>
        <Card
          style={styles.card}
          onPress={() => {
            Linking.openURL("mailto:someone@yoursite.com");
          }}
        >
          <View style={styles.inCard}>
            <MaterialIcons name="email" size={32} color="#4004D4" />
            <Text style={styles.text}>{email}</Text>
          </View>
        </Card>
      </View>
      <View style={styles.buttons}>
        <Button
          icon="account-edit"
          mode="contained"
          onPress={() => console.log("Pressed")}
          theme={theme}
          style={{ padding: 8 }}
        >
          Edit
        </Button>
        <Button
          icon="delete-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
          theme={theme}
          style={{ padding: 8 }}
        >
          Delete
        </Button>
      </View>
    </View>
  );
}

export default Profile;
