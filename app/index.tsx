import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bettingSites } from '@/data';
import { FlashList } from "@shopify/flash-list";
import BettingSiteCard from '@/components/home/BettingSiteCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          اختر المنصة المناسبة
        </Text>
        <View style={styles.gridContainer}>
          <FlashList
            data={bettingSites}
            renderItem={BettingSiteCard}
            estimatedItemSize={200}
            contentContainerStyle={styles.flashListConatinerStyles}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  )
};

export default index;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 10,
  },
  gridContainer: {
    flex: 1,
  },
  flashListConatinerStyles: {
    paddingTop: 0,
    padding: 10,
  }
});