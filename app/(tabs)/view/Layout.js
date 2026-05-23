import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="view/LoginPage" />
      <Stack.Screen name="view/FoodApp" />
      <Stack.Screen name="view/DetailFood" />
      <Stack.Screen name="view/CartPage" />
    </Stack>
  );
}