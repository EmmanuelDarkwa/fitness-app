import { Stylesheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop: 50}}>
      <View
        style={{
          backgroundColor: COLORS.grey,
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: COLORS.purple,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Home Workout
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: COLORS.white,
                fontSize: 50
              }}
            >
              0
            </Text>
            <Text style={{
                color: COLORS.white,
                fontSize: 20,
                marginTop: 6
            }}>Workouts</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: COLORS.white,
                fontSize: 50
              }}
            >
              0
            </Text>
            <Text  style={{
                color: COLORS.white,
                fontSize: 20,
                marginTop: 6
            }}>Kcal</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: COLORS.white,
                fontSize: 50
              }}
            >
              0
            </Text>
            <Text  style={{
                color: COLORS.white,
                fontSize: 20,
                marginTop: 6
            }}>Mins</Text>
          </View>
        </View>
        <View style={{
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Image style={{
                width: "90%",
                height:120,
                marginTop:20,
                borderRadius:7
            }}
            source={{uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",}}
            ></Image>
        </View>
            <FitnessCards/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
