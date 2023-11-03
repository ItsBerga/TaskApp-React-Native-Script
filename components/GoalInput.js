import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";

export default function GoalInput(props) {
  const image = {
    uri: "https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/44/189c07fc13303830.jpg",
  };
  // definiamo una variabile che memorizza lo stato del campo di testo
  const [testoInserito, setTesto] = useState("");

  //handler: gestore dell'evento ChangeText (testo cambiato)
  function handlerTestoModificato(testo) {
    setTesto(testo);
  }

  function aggiungiObiettivo() {
    props.handlerBottonePremuto(testoInserito);
    setTesto("");
  }

  return (
    <Modal visible={props.visibile} animationType="slide">
      <ImageBackground source={image} resizeMode="cover" style={s.image}>
        <View style={s.inputContainer}>
          <TextInput
            style={s.textInput}
            placeholder="Scrivi i tuoi obbiettivi"
            onChangeText={handlerTestoModificato}
            value={testoInserito}
          />
          <View style={s.buttonContainer}>
            <View style={s.button}>
              <Button title="add" color={'#3a9fbf'} onPress={aggiungiObiettivo} />
            </View>
            <View style={s.button}>
              <Button title="exit" color={'orange'} onPress={props.chiudiFinestra} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
}

const s = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
    color:'black',
    backgroundColor:'white'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    opacity:10,
    width: 100,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor:'white'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
