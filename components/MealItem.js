import {
  View,
  Pressable,
  Text,
  Platform,
  StyleSheet,
  Image,
} from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration}m</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
