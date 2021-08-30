import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles, theme } from "./style";
import * as ImagePicker from "expo-image-picker";

function CreateEmployee() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Pic, setPic] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const pickImageGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let newResult = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test.${result.uri.split(".")[1]}`,
      };
      upload(newResult);
    }
  };
  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let newResult = {
        uri: result.uri,
        type: `test/${result.uri.split(".")[1]}`,
        name: `test.${result.uri.split(".")[1]}`,
      };
      upload(newResult);
    }
  };

  const upload = (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "ContactsApp");
    data.append("cloud_name", "abeerwr");

    fetch("https://api.cloudinary.com/v1_1/abeerwr/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPic(data.url);
        setModal(false);
      });
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        label="Name"
        value={Name}
        mode="outlined"
        theme={theme}
        onChangeText={(name) => setName(name)}
      />

      <TextInput
        style={styles.input}
        label="Phone"
        value={Phone}
        mode="outlined"
        theme={theme}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={Email}
        mode="outlined"
        theme={theme}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        label="Salary"
        value={Salary}
        mode="outlined"
        theme={theme}
        onChangeText={(salary) => setSalary(salary)}
      />
      <Button
        style={styles.input}
        icon={Pic === "" ? "upload" : "check"}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.input}
        mode="contained"
        icon="content-save-outline"
        onPress={() => setModal(false)}
      >
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          //to close when press back button
          setModal(false);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalButtons}>
            <Button icon="camera" mode="contained" onPress={pickImageCamera}>
              Camera
            </Button>
            <Button icon="image" mode="contained" onPress={pickImageGallery}>
              Glary
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>Cancel</Button>
        </View>
      </Modal>
    </View>
  );
}

export default CreateEmployee;
