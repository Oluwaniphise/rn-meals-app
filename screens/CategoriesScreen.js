import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
  const numColumns = 2;

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      key={`category-${numColumns}`}
      renderItem={(itemData) => {
        return renderCategoryItem(itemData);
      }}
    />
  );
}

export default CategoriesScreen;
