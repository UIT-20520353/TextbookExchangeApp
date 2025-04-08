import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-2xl">Welcome!</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/books/1">Book detail</Link>
    </View>
  );
}
