import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput(props) {
  const [testoInserito, setTesto] = useState("");
  function testoModificaHandler(testo) {
    setTesto(testo);
  }
  function aggiungiObiettivo() {
    props.HandlerBottonePremuto(testoInserito);
    setTesto("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.titolo}
        placeholder="Scrivi una task..."
        onChangeText={testoModificaHandler}
        value={testoInserito}
      ></TextInput>
      <Button title="Toccami" onPress={aggiungiObiettivo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
