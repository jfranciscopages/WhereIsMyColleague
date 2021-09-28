import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  KaushanScript_400Regular,
} from "@expo-google-fonts/kaushan-script";
import { AntDesign } from "@expo/vector-icons";

export default function Intro({ navigation }) {

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <View style={styles.introView}>
          <Text style={styles.colleague}>Where is my colleague?</Text>
          <Image
            style={styles.img}
            source={
              {
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Globant-LightBG-Color%403x.png",
              }
            }
          />
        </View>
        <View style={styles.next}>
          <AntDesign
            name="rightcircle"
            size={24}
            color="black"
            onPress={() => navigation.navigate("home")}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  introView: {
    alignItems: "center",
  },
  colleague: {
    fontSize: 20,
    marginTop: 180,
    marginRight: 70,
  },
  img: {
    width: 200,
    height: 50,
  },
  next: {
    marginTop: 250,
    marginLeft: 320,
  },
});