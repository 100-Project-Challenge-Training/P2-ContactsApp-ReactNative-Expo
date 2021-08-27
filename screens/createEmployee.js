import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";

function CreateEmployee() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Pic, setPic] = useState("");
  const [modal, setModal] = useState(false);

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
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Your Image
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
            <Button
              icon="camera"
              mode="contained"
              onPress={() => setModal(false)}
            >
              Camera
            </Button>
            <Button
              icon="image"
              mode="contained"
              onPress={() => setModal(false)}
            >
              Glary
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>Cancel</Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  modalButtons: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around",
  },
  modal: {
    position: "absolute",
    bottom: 20,
    width: "100%",

    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

const theme = { colors: { primary: "#3D19F7" } };
export default CreateEmployee;
