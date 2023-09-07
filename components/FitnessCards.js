import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import COLORS from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation()
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
        onPress={()=> navigation.navigate('WorkoutPage', {
          image:item.image,
          exercises:item.excersises,
          id:item.id,
        })}
          style={{
            alignItems: "center",
            justifyContents: "center",
            margin: 10,
          }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: COLORS.white,
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 25,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: COLORS.white,
              bottom: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
