import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';



const BettingSiteCard = ({ item }: any) => {
  const handlePress = () => {
    router.navigate({
      pathname: "selectCurrency",
      params: {
        site: item.name
      }
    });
  }
  return (
    <Pressable onPress={handlePress} style={styles.itemConatiner}>
      <View style={styles.imageContainer}>
        <Image resizeMode='contain' style={styles.imageLogo} source={item.logo} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
    </Pressable>
  )
};

export default BettingSiteCard;

const styles = StyleSheet.create({
  itemConatiner: {
    flex:1,
    paddingVertical: 10,
    marginHorizontal: 8,
    overflow: "hidden",
    elevation: 2,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 160,

    borderWidth: 1,
    borderColor: "#91A3B0",

    borderRadius: 10,
    backgroundColor: "#E6EBEB",

    elevation: 2,
  },
  imageLogo: {
    width: "100%",
  },
  title: {
    paddingTop: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
})