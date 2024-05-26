import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';

const index = () => {
  const [id, setId] = React.useState('') as any;
  const [value, setValue] = React.useState('dirham');

  const { site } = useLocalSearchParams();

  const handlePress = () => {
    console.log({
      site,
      id,
      value,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        // justifyContent: "center",
        gap: 20,
        paddingHorizontal: 20,
        // marginTop: 90
      }}>
        <Text style={{ textAlign: "right", fontSize: 20 }}>رقم الحساب</Text>
        <TextInput
          label="رقم الحساب"
          keyboardType='decimal-pad'
          right={<TextInput.Icon  icon="account" />}
          textAlign='right'
          value={id}
          onChangeText={text => setId(text)}
        />
        <Text style={{ textAlign: "right", fontSize: 20 }}>اختر العملة</Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'dollar',
              label: 'الدولار',
            },
            {
              value: 'dirham',
              label: 'الدرهم',
            },
          ]}
        />
        <Button onPress={handlePress} style={styles.button}>
          <Text style={{ color: "white", fontSize: 20, paddingVertical: 5 }}>
            تم
          </Text>
        </Button>

      </View>
    </SafeAreaView>
  )
};

export default index

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#656565",
    marginTop: 20,
  }
})