import { Pressable, StyleSheet, Text, View } from "react-native";

function AddButton({ onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}

export default AddButton;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
