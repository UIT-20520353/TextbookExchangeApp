import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Book = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Book {id}</Text>
    </View>
  );
};

export default Book;
