import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const WorkoutPage = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <Image
        style={{ width: "100%", height: 170 }}
        source={{ uri: route.params.image }}
      />

      <Ionicons 
        style={{ position: "absolute", top: 50, left: 20 }}
        name="arrow-back-sharp"
        size={24}
        color="white"
        onPress={()=> navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default WorkoutPage;

const style = StyleSheet.create({});
