import GoalsItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  ImageBackground,
} from "react-native";
import { useState } from "react";
export default function App() {
  const image = { uri: "https://www.traccedisardegna.it/sites/default/files/logo/spiaggia_pollu_lotzorai.jpg" };
  //definiamo una maviabile che ememorizza lo stato del campo di testo
  const [listaObiettivi, setLista] = useState([]);

  const [finestraVisibile, setFinestraVisibile] = useState(false);

  function apriFinestra() {
    setFinestraVisibile(true);
  }

  function chiudiFinestra() {
    setFinestraVisibile(false);
  }

  //gestore del bottone
  function handlerBottonePremuto(testoInserito) {
    setLista((listaCorrente) => [
      ...listaCorrente,
      {
        text: testoInserito,
        id: Math.random().toString(),
      },
    ]);
    setFinestraVisibile(false);
  }

  //gestore cancellazione obiettivi
  function handlerCancellaGoal(id) {
    setLista((listaCorrente) => {
      return listaCorrente.filter((obiettivo) => obiettivo.id !== id);
    });
  }

  return (
    //contenitore dell'intera applicazione
    <View style={s.appContainer}>
      <ImageBackground source={image} resizeMode="cover" style={s.image}>
        <GoalInput
          visibile={finestraVisibile}
          handlerBottonePremuto={handlerBottonePremuto}
          chiudiFinestra={chiudiFinestra}
        />

        <View style={s.appContainer}>
          <Button
            title="Nuovo obiettivo"
            color="green"
            onPress={apriFinestra}
          />
          <GoalInput
            visibile={finestraVisibile}
            handlerBottonePremuto={handlerBottonePremuto}
            chiudiFinestra={chiudiFinestra}
          />
          <FlatList
            data={listaObiettivi}
            renderItem={(elemento) => {
              return (
                <GoalsItem
                  text={elemento.item.text}
                  id={elemento.item.id}
                  onDeleteItem={handlerCancellaGoal}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const s = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    //paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
