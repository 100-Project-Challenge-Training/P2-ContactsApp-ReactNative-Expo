import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles, theme } from "./style";
import * as ImagePicker from "expo-image-picker";

function CreateEmployee(props) {
  function getDetails(type) {
    if (props.route.params) {
      const { name, phone, email, job, img } = props.route.params;
      switch (type) {
        case "name":
          return name;
        case "phone":
          return phone;
        case "email":
          return email;
        case "job":
          return job;
        case "img":
          return img;
      }
    }
    return "";
  }
  const [name, setName] = useState(getDetails("name"));
  const [phone, setPhone] = useState(getDetails("phone"));
  const [email, setEmail] = useState(getDetails("email"));
  const [job, setJob] = useState(getDetails("job"));
  const [img, setImg] = useState(getDetails("img"));
  const [modal, setModal] = useState(false);

  const submitContactData = async () => {
    await fetch("https://contactsapp-reactnativ.herokuapp.com/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        img,
        job,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("from fetching", data);
        Alert.alert(`${data.name} is saved successfully`);
        props.navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(` error in posting contact ${err}`);
      });
  };

  const update = async () => {
    await fetch("https://contactsapp-reactnativ.herokuapp.com/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.route.params._id,
        name,
        phone,
        email,
        img,
        job,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("from fetching", data);
        Alert.alert(`${data.name} is updated `);
        props.navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(`error in updating ${err}`);
      });
  };
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
        setImg(data.url);
        setModal(false);
      });
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        label="Name"
        value={name}
        mode="outlined"
        theme={theme}
        onChangeText={(name) => setName(name)}
      />

      <TextInput
        style={styles.input}
        label="Phone"
        value={phone}
        mode="outlined"
        theme={theme}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        mode="outlined"
        theme={theme}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        label="Job"
        value={job}
        mode="outlined"
        theme={theme}
        onChangeText={(job) => setJob(job)}
      />
      <Button
        style={styles.input}
        icon={img === "" ? "upload" : "check"}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      {props.route.params ? (
        <Button
          style={styles.input}
          mode="contained"
          icon="content-save-outline"
          onPress={() => {
            update();
          }}
        >
          update
        </Button>
      ) : (
        <Button
          style={styles.input}
          mode="contained"
          icon="content-save-outline"
          onPress={() => {
            submitContactData();
          }}
        >
          Save
        </Button>
      )}

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
