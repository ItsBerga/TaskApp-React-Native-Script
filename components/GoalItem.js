import { StyleSheet, View, Text } from "react-native";
export default function GoalsItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>- {props.text}</Text>
    </View>
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
  },
});
