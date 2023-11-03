import GoalsItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [listaObbiettivi, setLista] = useState([]);
  function HandlerBottonePremuto(testoInserito) {
    console.log(testoInserito);
    setLista((listaCorrente) => [
      ...listaCorrente,
      {
        text: testoInserito,
        id: Math.random().toString(),
      },
    ]);
  }
  function handlerCancellaGoal(id) {
    setLista((listaCorrente) => {
      return listaCorrente.filter((obiettivo)=>obiettivo.id!==id);
    });
  }
  return (
    <View style={styles.appcontainer}>
      <GoalInput HandlerBottonePremuto={HandlerBottonePremuto} />
      <View style={styles.goalsContainer}>
        <Text title="I tuoi obbiettivi"></Text>
        <FlatList
          data={listaObbiettivi}
          renderItem={(elemento) => {
            return <GoalsItem text={elemento.item.text} id={elemento.item.id} onDeleteItem={handlerCancellaGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  goalsContainer:{
    flex:5
  }
});
