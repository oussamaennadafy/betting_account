import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackButtonMenuEnabled: true,
      }}
      >
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
