import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) => pressed && s.pressedItem}
    >
      <View style={s.goalItem}>
        <Text style={s.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  goalText: {
    color: "green",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
