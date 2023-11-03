import { StyleSheet, View, Text, Pressable } from "react-native";
export default function GoalsItem(props) {
  console.log(props);
  // style={({pressed})=>pressed && styles.pressedItem} if is pressed do the opacity in the styles.pressedItem
  //in js tutto quello che diverso da zero è vero !
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{color:'#210644'}} style={({pressed})=>pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>- {props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
    padding:8
  },
  pressedItem:{
    opacity:0.5,
  }
});
