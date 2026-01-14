import { Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, onClick, size = 24, color = "black" }) {
  return (
    <Pressable>
        {/* <Text>x</Text> */}
      <Ionicons name={icon} size={size} color={color} onPress={onClick} />
    </Pressable>
  );
}

export default IconButton;
