import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  KaushanScript_400Regular,
} from "@expo-google-fonts/kaushan-script";
import { AntDesign } from "@expo/vector-icons";

export default function Intro({ navigation }) {
  const [fontsLoaded] = useFonts({
    KaushanScript_400Regular,
  });

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <View style={styles.introView}>
          {/* <Text style={styles.welcome}>Welcome to</Text> */}
          <Text style={styles.colleague}>Where is my colleague?</Text>
          {/* <Text style={styles.text}>colleague?</Text> */}
          <Image
            style={styles.img}
            source={
              {
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Globant-LightBG-Color%403x.png",
              } /* require("../assets/logo-G.png") */
            }
          />
        </View>
        <View style={styles.next}>
          <AntDesign
            name="rightcircle"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  introView: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
  },
  //   welcome: {
  //     marginBottom: 70,
  //     marginLeft: 50,
  //     fontSize: 15,
  //     // fontWeight: 'bold',
  //   },
  colleague: {
    fontFamily: "KaushanScript_400Regular",
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
