import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return (
    <View style={styles.listItem}>
      {data.map((dataPoint) => (
        <Text style={styles.item} key={dataPoint}>
          {dataPoint}
        </Text>
      ))}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: "#e2b497",
  },
  item: {
    color: "#351401",
    fontSize: 16,
    textAlign: "center",
  },
});
