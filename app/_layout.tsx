import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider theme={{mode: 'exact'}}>
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
        <Stack.Screen options={{header: () => null}} name="index" />
        <Stack.Screen options={{headerTitle: "اختر العملة", headerTitleAlign: "center"}} name="selectCurrency/index" />
      </Stack>
    </PaperProvider>
  );
};